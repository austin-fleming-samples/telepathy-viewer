import { Option, errorOrUnknown, optionFail } from "@modules/common/utils";
import { telepathyRepo } from "@modules/telepathy-logs/repo";
import {
	LOGS_MAX_BLOCKS_PER_REQUEST,
	LOGS_MAX_BLOCKS_RANGE,
} from "@modules/telepathy-logs/constants";
import { SendMailLog } from "@modules/telepathy-logs/entities/log";

/**
 * Gets logs within bounds of start and end block numbers. Gets around the limits of eth_getLogs by
 * splitting the range into chunks to be fetched in parallel.
 */
export const getSendmailLogs = async (options: {
	latestBlockNumber: number;
	earliestBlockNumber: number;
	startBlockNumber: number;
	endBlockNumber: number;
}): Promise<Option<SendMailLog[]>> => {
	try {
		const validatedEndBlockNumber = Math.min(
			options.endBlockNumber,
			options.latestBlockNumber
		);
		const validatedStartBlockNumber = Math.max(
			options.startBlockNumber,
			options.earliestBlockNumber
		);

		const range = validatedEndBlockNumber - validatedStartBlockNumber;
		if (range <= 0) {
			return optionFail(
				new Error(
					"Ending block number must be higher than starting block number."
				)
			);
		}
		if (range > LOGS_MAX_BLOCKS_RANGE) {
			return optionFail(
				new Error(
					`Block range ${range} exceeds the max ${LOGS_MAX_BLOCKS_RANGE}.`
				)
			);
		}

		const chunks = Math.ceil(
			(validatedEndBlockNumber - validatedStartBlockNumber) /
				LOGS_MAX_BLOCKS_RANGE
		);
		const pendingFetches = await Promise.all(
			Array(chunks)
				.fill(0)
				.map(async (_, i) => {
					const chunkEnd =
						validatedStartBlockNumber +
						(i + 1) * LOGS_MAX_BLOCKS_PER_REQUEST -
						1;
					let chunkStart =
						validatedStartBlockNumber +
						i * LOGS_MAX_BLOCKS_PER_REQUEST;
					// check for reappearance of out of bounds fetches
					chunkStart = Math.max(
						chunkStart,
						options.startBlockNumber
					);

					const maybeLogs = await telepathyRepo.getSendmailLogs({
						startBlockNumber: chunkStart,
						endBlockNumber: chunkEnd,
					});
					if (!maybeLogs.ok) {
						throw maybeLogs.err;
					}

					// TODO: reverse call is a hack as I realized I built everything upside down.
					return maybeLogs.data.result.reverse();
				})
		);

		return SendMailLog.fromLogDTOs(pendingFetches.flat());
	} catch (err) {
		return optionFail(errorOrUnknown(err));
	}
};

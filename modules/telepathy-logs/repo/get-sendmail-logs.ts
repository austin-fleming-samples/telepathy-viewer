import {
	LOGS_MAX_BLOCKS_PER_REQUEST,
	NODE_HTTP_ENDPOINT,
	TELEPATHY_ROUTER_ADDRESS,
	TELEPATHY_ROUTER_CHAIN_ID,
	TELEPATHY_ROUTER_SENDMAIL_TOPIC,
} from "@modules/telepathy-logs/constants";
import { LogsDTO } from "@modules/telepathy-logs/entities";
import {
	Option,
	errorOrUnknown,
	numberToHex,
	optionFail,
	optionOk,
} from "@modules/common/utils";

export const getSendmailLogs = async ({
	startBlockNumber,
	endBlockNumber,
}: {
	startBlockNumber: number;
	endBlockNumber: number;
}): Promise<Option<LogsDTO>> => {
	try {
		const requestedBlockRange = endBlockNumber - startBlockNumber;
		if (requestedBlockRange > LOGS_MAX_BLOCKS_PER_REQUEST) {
			return optionFail(
				new Error(
					`Block range ${requestedBlockRange} exceeds the max ${LOGS_MAX_BLOCKS_PER_REQUEST}.`
				)
			);
		}

		const response = await fetch(NODE_HTTP_ENDPOINT, {
			method: "POST",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				method: "eth_getLogs",
				params: [
					{
						address: TELEPATHY_ROUTER_ADDRESS,
						fromBlock: numberToHex(startBlockNumber),
						toBlock: numberToHex(endBlockNumber),
						topics: [TELEPATHY_ROUTER_SENDMAIL_TOPIC],
					},
				],
				id: TELEPATHY_ROUTER_CHAIN_ID,
				jsonrpc: "2.0",
			}),
			redirect: "follow",
		});
		if (response.status !== 200 || !response.ok) {
			return optionFail(
				new Error(
					`Server returned a ${response.status} error. Error message: ${response.statusText}`
				)
			);
		}

		const body: LogsDTO = await response.json();
		if (!body.result) {
			return optionFail(
				new Error("Could not interpret server response.")
			);
		}

		return optionOk(body);
	} catch (err) {
		return optionFail(errorOrUnknown(err));
	}
};

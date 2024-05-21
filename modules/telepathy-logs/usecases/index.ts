import { Option } from "@modules/common/utils";
import { SendMailLog } from "@modules/telepathy-logs/entities";
import { getSendmailLogs } from "./get-sendmail-logs";
import { getCurrentBlockNumber } from "./get-current-block-number";

interface TelepathyUsecases {
	getSendmailLogs: (options: {
		latestBlockNumber: number;
		earliestBlockNumber: number;
		startBlockNumber: number;
		endBlockNumber: number;
	}) => Promise<Option<SendMailLog[]>>;
	getCurrentBlockNumber: () => Promise<Option<number>>;
}

export const telepathyUsecases: TelepathyUsecases = {
	getSendmailLogs,
	getCurrentBlockNumber,
};

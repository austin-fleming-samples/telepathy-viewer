import { Option } from "@modules/common/utils";
import { getSendmailLogs } from "./get-sendmail-logs";
import { LogsDTO } from "@modules/telepathy-logs/entities";
import { getCurrentBlock } from "./get-current-block";

export interface TelepathyRepo {
	getSendmailLogs: (options: {
		startBlockNumber: number;
		endBlockNumber: number;
	}) => Promise<Option<LogsDTO>>;
	getCurrentBlock: () => Promise<Option<string>>;
}

export const telepathyRepo: TelepathyRepo = {
	getSendmailLogs,
	getCurrentBlock,
};

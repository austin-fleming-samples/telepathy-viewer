import { SendMailLog } from "../../entities";
import { Table } from "@radix-ui/themes";
import { ArrowLink } from "../../../common/components/arrow-link/arrow-link";
import { LogTableHexCell } from "./log-table-hex-cell";
import * as Popover from "@radix-ui/react-popover";

export const LogTableRow = ({ log }: { log: SendMailLog }) => {
	return (
		<Table.Row>
			<Table.RowHeaderCell>{log.values.logNonce}</Table.RowHeaderCell>

			<Table.Cell>
				<ArrowLink
					href={log.values.explorerBlockLink}
					target="_blank"
				>
					{log.values.blockNumber}
				</ArrowLink>
			</Table.Cell>

			<Table.Cell>{log.values.messageNonce}</Table.Cell>

			<LogTableHexCell value={log.values.messageHash} />
			<LogTableHexCell value={log.values.messageBytes} />
			<LogTableHexCell value={log.values.txHash} />
		</Table.Row>
	);
};

import { Table } from "@radix-ui/themes";
import { LogTableRow } from "./log-table-row";
import { useLogsStore } from "@modules/telepathy-logs/stores";

export const LogTable = () => {
	const store = useLogsStore();

	return (
		<Table.Root className="min-h-[50vh]">
			<Table.Header>
				<Table.Row>
					<Table.ColumnHeaderCell>Log #</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Block</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>
						Message Nonce
					</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>
						Message Hash
					</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>
						Message Bytes
					</Table.ColumnHeaderCell>
					<Table.ColumnHeaderCell>Tx Hash</Table.ColumnHeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				{store.logs.length > 0 &&
					store.logs.map((log) => (
						<LogTableRow key={log.values.txHash} log={log} />
					))}
			</Table.Body>
		</Table.Root>
	);
};

import { useCopyToClipboard } from "../../../common/hooks";
import { AccessibleIcon, IconButton, Table } from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
import { Eye as EyeIcon, Copy as CopyIcon } from "@phosphor-icons/react";
import { truncateString } from "../../../common/utils";
import S from "./log-table-hex-cell.module.css";

export const LogTableHexCell = ({ value }: { value: string }) => {
	const [_, copyFn] = useCopyToClipboard();

	return (
		<Popover.Root>
			<Table.Cell>
				<p className="flex flex-row gap-2">
					<span className="font-mono leading-none">
						{truncateString(value, 7)}
					</span>

					<Popover.Trigger>
						<IconButton variant="ghost" asChild>
							<AccessibleIcon label="view">
								<EyeIcon />
							</AccessibleIcon>
						</IconButton>
					</Popover.Trigger>
				</p>
			</Table.Cell>

			<Popover.Portal>
				<Popover.Content className={S.popoverModal}>
					<p className={S.popoverText}>{value}</p>

					<IconButton
						onClick={() => copyFn(value)}
						variant="ghost"
						color="blue"
					>
						<AccessibleIcon label="copy">
							<CopyIcon />
						</AccessibleIcon>
					</IconButton>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};

import { ArrowLink, StatPill } from "@modules/common/components";
import { StatGhost } from "@modules/common/components/stat-ghost/stat-ghost";
import { truncateString } from "@modules/common/utils";
import {
	TELEPATHY_ROUTER_ADDRESS,
	TELEPATHY_ROUTER_CHAIN_ID,
	TELEPATHY_ROUTER_EARLIEST_BLOCK,
	TELEPATHY_ROUTER_EXPLORER_ADDRESS,
	TELEPATHY_ROUTER_EXPLORER_BLOCK,
	TELEPATHY_ROUTER_SENDMAIL_TOPIC,
} from "@modules/telepathy-logs/constants";
import { useLogsStore } from "@modules/telepathy-logs/stores";
import S from "./block-details.module.css"

export const BlockDetails = () => {
	const store = useLogsStore();

	return (
		<>
			<div className={S.row}>
				<StatPill>
					<span className="block opacity-80">contract</span>
					<span className="block font-mono font-bold">
						<ArrowLink
							target="_blank"
							href={
								TELEPATHY_ROUTER_EXPLORER_ADDRESS +
								TELEPATHY_ROUTER_ADDRESS
							}
						>
							{truncateString(TELEPATHY_ROUTER_ADDRESS, 7)}
						</ArrowLink>
					</span>
				</StatPill>

				<StatPill>
					<span className="opacity-80">first block</span>
					<span className="font-mono font-bold">
						<ArrowLink
							target="_blank"
							href={
								TELEPATHY_ROUTER_EXPLORER_BLOCK +
								TELEPATHY_ROUTER_EARLIEST_BLOCK
							}
						>
							{TELEPATHY_ROUTER_EARLIEST_BLOCK}
						</ArrowLink>
					</span>
				</StatPill>

				<StatPill>
					<span className="opacity-80">topic</span>
					<span className="font-mono font-bold">
						{truncateString(TELEPATHY_ROUTER_SENDMAIL_TOPIC, 7)}
					</span>
				</StatPill>

				<StatPill>
					<span className="opacity-80">network</span>
					<span className="font-mono font-bold">
						{TELEPATHY_ROUTER_CHAIN_ID}
					</span>
				</StatPill>
			</div>

			<div className={`${S.row} text-sm`}>
				<StatGhost>
					<span className="opacity-80">current block</span>
					<span className="font-mono font-bold">
						<ArrowLink
							target="_blank"
							href={
								TELEPATHY_ROUTER_EXPLORER_BLOCK +
								store.latestBlock
							}
						>
							{store.latestBlock}
						</ArrowLink>
					</span>
				</StatGhost>

				<StatGhost>
					<p className="opacity-80">showing blocks</p>
					<div className="bg-brandbright-900 rounded-full py-[0.25em] px-[1em] font-mono text-branddark-900">
						{store.fromBlock} / {store.toBlock}
					</div>
				</StatGhost>
			</div>
		</>
	);
};

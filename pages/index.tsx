import {
	ContentContainer,
	ContentSection,
	ContentTitle,
} from "@modules/common/components";
import {
	BlockDetails,
	BlocksFilter,
	LogTable,
} from "@modules/telepathy-logs/components";
import { useLogsStore } from "@modules/telepathy-logs/stores";
import { useEffect } from "react";
import { LoadBlocksButton } from "@modules/telepathy-logs/components/load-blocks-button/load-blocks-button";

const IndexPage = () => {
	const store = useLogsStore();

	useEffect(() => {
		if (store.isInitialized) return;

		store.initialize();
	}, [store]);

	return (
		<main className="flex flex-col max-w-screen-lg gap-8 p-8 mx-auto">
			<h1 className="mt-10 mb-8 text-3xl font-bold">Dashboard</h1>

			<ContentSection>
				<ContentTitle>Details</ContentTitle>
				<BlockDetails />
			</ContentSection>

			<ContentSection>
				<ContentTitle>Search Settings</ContentTitle>
				<BlocksFilter />
			</ContentSection>

			<ContentSection>
				<ContentTitle>Logs</ContentTitle>
				<ContentContainer>
					<LogTable />
				</ContentContainer>

				<div className="mx-auto text-sm">
					loaded blocks{" "}
					<span className="font-mono font-bold">
						{store.fromBlock}
					</span>{" "}
					to{" "}
					<span className="font-mono font-bold">
						{store.toBlock}
					</span>
				</div>
			</ContentSection>

			<LoadBlocksButton />
		</main>
	);
};

export default IndexPage;

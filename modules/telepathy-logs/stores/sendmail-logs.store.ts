import { telepathyUsecases } from "@modules/telepathy-logs/usecases";
import { SendMailLog } from "../entities";
import { create as createStore } from "zustand";
import {
	LOGS_MAX_BLOCKS_RANGE,
	TELEPATHY_ROUTER_EARLIEST_BLOCK,
} from "../constants";
import { toast } from "react-toastify";

type State = {
	logs: SendMailLog[];
	isInitialized: boolean;
	status: "UNINITIALIZED" | "LOADING" | "SUCCESS" | "ERROR";
	latestBlock: number;
	earliestBlock: number;
	toBlock: number;
	fromBlock: number;
	searchRange: number;
	totalRange: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	initialize: () => Promise<void>;
	updateRange: (searchRange: number) => Promise<void>;
	updateRangeOffset: (endBlock: number) => Promise<void>;
	loadNextPage: () => Promise<void>;
};

export const useLogsStore = createStore<State>((set, get) => ({
	logs: [],
	isInitialized: false,
	status: "UNINITIALIZED",
	latestBlock: 0,
	earliestBlock: TELEPATHY_ROUTER_EARLIEST_BLOCK,
	toBlock: 0,
	fromBlock: TELEPATHY_ROUTER_EARLIEST_BLOCK,
	searchRange: LOGS_MAX_BLOCKS_RANGE,
	totalRange: 0,
	hasNextPage: false,
	hasPreviousPage: false,
	initialize: async () => {
		if (get().isInitialized) {
			return;
		}
		set({ isInitialized: true, status: "LOADING" });

		const maybeCurrentBlock =
			await telepathyUsecases.getCurrentBlockNumber();
		if (!maybeCurrentBlock.ok) {
			toast.error("Failed to initialize application");
			set({ status: "ERROR" });
			console.error(maybeCurrentBlock.err);
			return;
		}

		const { data: currentBlock } = maybeCurrentBlock;
		const fromBlock = currentBlock - LOGS_MAX_BLOCKS_RANGE;

		const maybeLogs = await telepathyUsecases.getSendmailLogs({
			latestBlockNumber: currentBlock,
			earliestBlockNumber: TELEPATHY_ROUTER_EARLIEST_BLOCK,
			startBlockNumber: fromBlock,
			endBlockNumber: currentBlock,
		});
		if (!maybeLogs.ok) {
			toast.error("Failed to initialize application");
			set({ status: "ERROR" });
			console.error(maybeLogs.err);
			return;
		}

		set({
			isInitialized: true,
			logs: maybeLogs.data,
			toBlock: currentBlock,
			status: "SUCCESS",
			latestBlock: currentBlock,
			fromBlock,
			totalRange: currentBlock - TELEPATHY_ROUTER_EARLIEST_BLOCK,
			hasNextPage: fromBlock > TELEPATHY_ROUTER_EARLIEST_BLOCK,
			hasPreviousPage: false,
		});
	},
	updateRange: async (searchRange) => {
		const { isInitialized, toBlock, earliestBlock, latestBlock } =
			get();
		if (!isInitialized) {
			return;
		}
		set({ status: "LOADING" });

		const requestedFromBlock = toBlock - searchRange;
		const adjustedFromBlock = Math.max(
			requestedFromBlock,
			earliestBlock
		);
		const adjustedRange = toBlock - adjustedFromBlock;

		const maybeLogs = await telepathyUsecases.getSendmailLogs({
			latestBlockNumber: latestBlock,
			earliestBlockNumber: earliestBlock,
			startBlockNumber: adjustedFromBlock,
			endBlockNumber: toBlock,
		});
		if (!maybeLogs.ok) {
			toast.error("Failed to update range");
			set({ status: "ERROR" });
			console.error(maybeLogs.err);
			return;
		}

		set({
			status: "SUCCESS",
			logs: maybeLogs.data,
			searchRange: adjustedRange,
			fromBlock: adjustedFromBlock,
			hasNextPage: adjustedFromBlock > earliestBlock,
			hasPreviousPage: toBlock < latestBlock,
		});
	},
	updateRangeOffset: async (endBlock) => {
		const { isInitialized, searchRange, earliestBlock, latestBlock } =
			get();

		if (!isInitialized) {
			return;
		}
		set({ status: "LOADING" });

		const requestedFromBlock = endBlock - searchRange;
		const adjustedFromBlock = Math.max(
			requestedFromBlock,
			earliestBlock
		);
		const adjustedRange = endBlock - adjustedFromBlock;

		const maybeLogs = await telepathyUsecases.getSendmailLogs({
			latestBlockNumber: latestBlock,
			earliestBlockNumber: earliestBlock,
			startBlockNumber: adjustedFromBlock,
			endBlockNumber: endBlock,
		});
		if (!maybeLogs.ok) {
			toast.error("Failed to update range");
			set({ status: "ERROR" });
			console.error(maybeLogs.err);
			return;
		}

		set({
			status: "SUCCESS",
			logs: maybeLogs.data,
			searchRange: adjustedRange,
			fromBlock: adjustedFromBlock,
			hasNextPage: adjustedFromBlock > earliestBlock,
			hasPreviousPage: endBlock < latestBlock,
		});
	},
	loadNextPage: async () => {
		const {
			isInitialized,
			searchRange,
			fromBlock,
			latestBlock,
			earliestBlock,
			logs,
		} = get();
		if (!isInitialized) {
			return;
		}

		if (fromBlock <= earliestBlock) {
			return;
		}
		set({ status: "LOADING" });

		const requestedToBlock = fromBlock - 1;
		const requestedFromBlock = requestedToBlock - searchRange;
		const adjustedFromBlock = Math.max(
			requestedFromBlock,
			earliestBlock
		);
		const adjustedRange = requestedToBlock - adjustedFromBlock;

		const maybeLogs = await telepathyUsecases.getSendmailLogs({
			latestBlockNumber: latestBlock,
			earliestBlockNumber: earliestBlock,
			startBlockNumber: adjustedFromBlock,
			endBlockNumber: requestedToBlock,
		});
		if (!maybeLogs.ok) {
			toast.error("Failed to load next page");
			set({ status: "ERROR" });
			console.error(maybeLogs.err);
			return;
		}

		set({
			status: "SUCCESS",
			logs: [...logs, ...maybeLogs.data],
			searchRange: adjustedRange,
			fromBlock: adjustedFromBlock,
			toBlock: requestedToBlock,
			hasNextPage: adjustedFromBlock > earliestBlock,
			hasPreviousPage: requestedToBlock < latestBlock,
		});
	},
}));

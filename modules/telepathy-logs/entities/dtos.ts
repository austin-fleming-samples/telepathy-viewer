export type CurrentBlockDTO = {
	jsonrpc: string;
	id: string;
	result: string;
};

export type LogDTO = {
	address: string;
	blockHash: string;
	blockNumber: string;
	data: string;
	logIndex: string;
	removed: boolean;
	topics: string[];
	transactionHash: string;
	transactionIndex: string;
};

export type LogsDTO = {
	jsonrpc: string;
	id: string;
	result: LogDTO[];
};

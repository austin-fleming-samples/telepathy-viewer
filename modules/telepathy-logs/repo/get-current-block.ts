import {
	Option,
	errorOrUnknown,
	optionFail,
	optionOk,
} from "@modules/common/utils";
import {
	NODE_HTTP_ENDPOINT,
	TELEPATHY_ROUTER_CHAIN_ID,
} from "@modules/telepathy-logs/constants";
import { CurrentBlockDTO } from "@modules/telepathy-logs/entities";

export const getCurrentBlock = async (): Promise<Option<string>> => {
	try {
		const requestOptions: RequestInit = {
			method: "POST",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				method: "eth_blockNumber",
				params: [],
				id: TELEPATHY_ROUTER_CHAIN_ID,
				jsonrpc: "2.0",
			}),
			redirect: "follow",
		};

		const response = await fetch(NODE_HTTP_ENDPOINT, requestOptions);
		if (response.status !== 200 || !response.ok) {
			return optionFail(new Error(`HTTP status ${response.status}`));
		}

		const body: CurrentBlockDTO = await response.json();
		if (!body.result) {
			return optionFail(new Error("No block hash returned"));
		}

		return optionOk(body.result);
	} catch (error) {
		return optionFail(errorOrUnknown(error));
	}
};

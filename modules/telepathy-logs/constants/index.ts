import { TelepathyRouterABI } from "../abi";

export const NODE_HTTP_ENDPOINT = "https://docs-demo.quiknode.pro/";

// TODO: rename to LOGS_MAX_BLOCK_RESULTS. The naming of these two are confusing
export const LOGS_MAX_BLOCKS_RANGE = 500_000; // max paginated results
export const LOGS_MAX_BLOCKS_PER_REQUEST = 10_000; // eth_getLogs limit

export const TELEPATHY_ROUTER_ADDRESS =
	"0x41EA857C32c8Cb42EEFa00AF67862eCFf4eB795a";
export const TELEPATHY_ROUTER_CHAIN_ID = 1;
export const TELEPATHY_ROUTER_EARLIEST_BLOCK = 16830432;
export const TELEPATHY_ROUTER_SENDMAIL_TOPIC =
	"0xe5944a34d67c652e0ebf2304b48432aae0b55e40f79ba8a21a4d7054c169ffac";
export const TELEPATHY_ROUTER_ABI = TelepathyRouterABI;

export const TELEPATHY_ROUTER_EXPLORER_ADDRESS =
	"https://etherscan.io/address/";
export const TELEPATHY_ROUTER_EXPLORER_TX = "https://etherscan.io/tx/";
export const TELEPATHY_ROUTER_EXPLORER_BLOCK =
	"https://etherscan.io/block/";

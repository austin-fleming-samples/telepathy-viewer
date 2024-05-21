import {
	Option,
	hexToNumber,
	optionFail,
	optionOk,
} from "../../common/utils";
import { LogDTO } from "./log.dto";
import {
	TELEPATHY_ROUTER_ABI,
	TELEPATHY_ROUTER_EXPLORER_BLOCK,
	TELEPATHY_ROUTER_EXPLORER_TX,
} from "../constants";
import { ethers } from "ethers";

type SendMailProps = {
	blockHex: string;
	blockNumber: number;
	explorerBlockLink: string;
	explorerTxLink: string;
	messageBytes: string;
	messageHash: string;
	messageNonce: string;
	logNonce: number;
	txHash: string;
};

export class SendMailLog {
	values: Readonly<SendMailProps>;

	private constructor(props: SendMailProps) {
		this.values = props;
	}

	static fromLogDTO(logDTO: LogDTO): Option<SendMailLog> {
		const maybeNonce = hexToNumber(logDTO.logIndex);
		if (!maybeNonce.ok) {
			return optionFail(
				new Error(`Could not parse nonce from ${logDTO.logIndex}`)
			);
		}

		const maybeBlockNumber = hexToNumber(logDTO.blockNumber);
		if (!maybeBlockNumber.ok) {
			return optionFail(
				new Error(
					`Could not parse block number from ${logDTO.blockNumber}`
				)
			);
		}

		const explorerBlockLink =
			TELEPATHY_ROUTER_EXPLORER_BLOCK + maybeBlockNumber.data;
		const explorerTxLink =
			TELEPATHY_ROUTER_EXPLORER_TX + logDTO.transactionHash;

		const parser = new ethers.Interface(TELEPATHY_ROUTER_ABI);
		const parsedLog = parser.parseLog(logDTO);
		if (!parsedLog) {
			return optionFail(new Error(`Could not parse log`));
		}

		const messageNonce = ethers.toBigInt(parsedLog.args[0]).toString();
		const messageHash = parsedLog.args[1];
		const messageBytes = parsedLog.args[2];

		return optionOk(
			new SendMailLog({
				blockHex: logDTO.blockNumber,
				blockNumber: maybeBlockNumber.data,
				explorerBlockLink,
				explorerTxLink,
				messageBytes,
				messageHash,
				messageNonce,
				logNonce: maybeNonce.data,
				txHash: logDTO.transactionHash,
			})
		);
	}

	static fromLogDTOs(logDTOs: LogDTO[]): Option<SendMailLog[]> {
		let logs: SendMailLog[] = [];

		for (let i = 0; i < logDTOs.length; i++) {
			const maybeLog = SendMailLog.fromLogDTO(logDTOs[i]);
			if (!maybeLog.ok) {
				return optionFail(maybeLog.err);
			}

			logs.push(maybeLog.data);
		}

		return optionOk(logs);
	}
}

import { Option, hexToNumber } from "@modules/common/utils";
import { telepathyRepo } from "../repo";

export const getCurrentBlockNumber = async (): Promise<Option<number>> => {
	const maybeCurrentBlock = await telepathyRepo.getCurrentBlock();
	if (!maybeCurrentBlock.ok) {
		return maybeCurrentBlock;
	}

	return hexToNumber(maybeCurrentBlock.data);
};

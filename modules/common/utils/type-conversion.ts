import { Option, optionFail, optionOk } from ".";

export const hexToNumber = (hex: string): Option<number> => {
	const maybeInt = parseInt(hex, 16);
	if (isNaN(maybeInt)) {
		return optionFail(new Error(`${hex} cannot be parsed to integer`));
	}

	return optionOk(maybeInt);
};

export const numberToHex = (num: number): string => {
	return `0x${num.toString(16)}`;
};

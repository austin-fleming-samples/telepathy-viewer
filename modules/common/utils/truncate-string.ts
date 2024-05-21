export const truncateString = (value: string, maxLength: number) => {
	if (value.length <= maxLength) {
		return value;
	}

	return `${value.slice(0, maxLength)}...`;
};

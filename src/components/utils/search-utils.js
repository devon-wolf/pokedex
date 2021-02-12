// never used, probably remove
export function filterByString(input, dataStrings) {
	const filteredData = dataStrings.filter(item => {
		return item.includes(input);
	})
	return filteredData;
}
export function sortObjectsAscending(objectArray, property) {
	objectArray.sort((a, b) => {
		if (a[property] < b[property]) return -1;
		else if (a[property] > b[property]) return 1;
		else return 0;
	});
	console.log(objectArray);
	return objectArray;
}

export function sortObjectsDescending(objectArray, property) {
	objectArray.sort((a, b) => {
		if (a[property] < b[property]) return 1;
		else if (a[property] > b[property]) return -1;
		else return 0;
	});
	return objectArray;
}
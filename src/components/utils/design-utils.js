export function capitalize(string) {
	try {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	catch {
		return;
	}
}
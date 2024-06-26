export default function getResponseFromAPI() {
	const nam = true;
	return new Promise((resolve, reject) => {
		if (nam) {
			resolve();
		} else {
			reject();
		}
	});
}

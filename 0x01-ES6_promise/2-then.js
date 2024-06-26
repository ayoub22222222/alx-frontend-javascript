export default function handleResponseFromAPI(promise) {
	const vm = {
		status: 200,
		body: 'success',
	};
	return promise
		.then(() => ({vm}))
	        .catch(() => new Error())
	        .finally(() => console.log('Got a response from the API'));
}

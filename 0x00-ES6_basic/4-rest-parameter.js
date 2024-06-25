export default function returnHowManyArguments(...theArgs) {
	let count = 0;	
	for (const num of theArgs) {
		count += num;
	}
	return count;
}

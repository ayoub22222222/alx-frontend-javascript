export default function returnHowManyArguments(...theArgs) {
	var count = 0;	
	for (const num of theArgs){
		count += num;
	};
	return count;
}

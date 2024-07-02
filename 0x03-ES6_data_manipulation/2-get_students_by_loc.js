export default function getStudentsByLocation(list, city) {
	const r = list.filter((i) => {
		if (i.location === city) {
			return i.location
		};
	});
	return r;
}

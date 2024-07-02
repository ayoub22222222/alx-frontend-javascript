export default function getStudentsByLocation(list, city) {
	const r = list.filter((i) => {
		if (i.city === city) {
			return i.city
		};
	});
	return r;
}

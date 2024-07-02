export default function getListStudentIds(ar) {
	if (Array.isArray(ar)) {
		const val = ar.map((ars) => {
			ars.id;
		});
		return val;
	}
	return [];
}

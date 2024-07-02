export default function getStudentIdsSum(list) {
	return list.reduce((accum, c) => accum + c.id, 0);
}

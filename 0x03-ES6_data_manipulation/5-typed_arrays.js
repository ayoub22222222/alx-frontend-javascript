export default function createInt8TypedArray(length, position, value) {
	let buffer = new ArrayBuffer(lenght);
	let view = new DataView(buffer);

	try {
		view.setInt8(position, value);
	} catch (e) {
		throw Error('Position outside range');
	}
	return view;
}

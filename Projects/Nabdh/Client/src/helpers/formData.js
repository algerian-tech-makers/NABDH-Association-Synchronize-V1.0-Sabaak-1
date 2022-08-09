export function setFormData(obj) {
	let formData = new FormData();
	for (let key in obj) {
		formData.append(key, obj[key]);
	}
	return formData;
}

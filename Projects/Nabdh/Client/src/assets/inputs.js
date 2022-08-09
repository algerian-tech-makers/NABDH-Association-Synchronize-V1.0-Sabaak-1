export let loginInputs = [
	{ id: "email", label: "البريد الإلكتروني", type: "email", name: "email", required: true },
	{ id: "password", label: "كلمة المرور", type: "password", name: "password", required: true },
];
export let signupInputs = [
	{ id: "email", label: "البريد الإلكتروني", type: "email", name: "email", required: true },
	{ id: "password", label: "كلمة المرور", type: "password", name: "password", required: true },
	{
		id: "confirmPassword",
		label: "تأكيد كلمة المرور",
		type: "password",
		name: "confirmPassword",
		required: true,
	},
];
export let AssociationOnboardingInputs = [
	{ id: "name", label: "إسم الجمعية", type: "text", name: "name", required: true },
	{ id: "address", label: "عنوان الجمعية", type: "text", name: "address", required: true },
	{ id: "phone", label: "رقم هاتف الجمعية", type: "number", name: "phone", required: true },
	{
		id: "activity",
		label: "نشاط الجمعية",
		type: "select",
		options: ["إطعام", "الحفاظ على البيئة", "مساعدة المرضى"],
		name: "activity",
		required: true,
	},
];
export let verefication = [
	{ id: "profilePic", label: "صورة للجمعية", type: "file", name: "profilePic" },
	{
		id: "idCard",
		label: "بطاقة التعريف الخاصة برئيس الجمعية",
		type: "file",
		name: "idCard",
		required: true,
	},
	{
		id: "associationLicence",
		label: "تصريح العمل للجمعية",
		type: "file",
		name: "associationLicence",
		required: true,
	},
];

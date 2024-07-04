interface Teacher {
	readonly firstname: string;
	readonly lastname: string;
	fullTimeEmployee: bolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}
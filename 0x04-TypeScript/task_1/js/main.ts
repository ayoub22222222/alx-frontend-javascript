interface Teacher {
	readonly firstname: string;
	readonly lastname: string;
	fullTimeEmployee: bolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}


function printTeacher(firstName, lastname): printTeacherFunction {
	return `${firstanme[0]. ${lastname}}`;
} 


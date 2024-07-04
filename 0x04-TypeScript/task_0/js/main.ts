interface Student {
	firstName: string,
	lastname: string,
	age: number,
	location: string,
}

const student1: Student = {
	firstname: "alae",
	lastname:  "nik",
	age: 41,
	location: "cc al"
}

const student2: Student = {
        firstname: "aya",
        lastname: "gay",
        age: 11,
        location: "rabat"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);


interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: "Leo",
    lastName: "Messi",
    age: 36,
    location: "Miami",
};
  
const student2: Student = {
    firstName: "Cyril",
    lastName: "Paul",
    age: 22,
    location: "Cairo",
};
  
const studentsList: Student[] = [student1, student2];

// vanilla JS
const table = document.getElementById("studentTable");

if (table) {
  studentsList.forEach((student) => {
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
  });
}

interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows to add any attribute to the Object
  }
  
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}
  
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
  
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}
  
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
  
const printTeacherFunction: PrintTeacherFunction = printTeacher;
console.log(printTeacherFunction("John", "Doe"));

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}
  
class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
}
  
const student: StudentClass = new StudentClass("Alice", "Smith");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice
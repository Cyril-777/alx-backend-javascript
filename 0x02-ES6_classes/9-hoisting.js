export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

export const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', new HolbertonClass(2020, 'San Francisco')),
  new StudentHolberton('John', 'Doe', new HolbertonClass(2020, 'San Francisco')),
  new StudentHolberton('Albert', 'Clinton', new HolbertonClass(2019, 'San Francisco')),
  new StudentHolberton('Donald', 'Bush', new HolbertonClass(2019, 'San Francisco')),
  new StudentHolberton('Jason', 'Sandler', new HolbertonClass(2019, 'San Francisco')),
];

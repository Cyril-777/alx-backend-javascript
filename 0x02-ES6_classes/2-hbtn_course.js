export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(theName) {
    if (typeof theName === 'string') {
      this._name = theName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(theLength) {
    if (typeof theLength === 'number') {
      this._length = theLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(theStudents) {
    if (Array.isArray(theStudents)) {
      this._students = theStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}

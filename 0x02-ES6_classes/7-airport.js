export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(theName) {
    this._name = theName;
  }

  get code() {
    return this._code;
  }

  set code(theCode) {
    this._code = theCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
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
    this._name = theCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

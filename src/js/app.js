// TODO: write your code here
export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const validSymbol = /^[^_\d-]\w+_*-*[^_\d-]$/g.test(this.userName);
    const invalidDigital = /\d{3,}/.test(this.userName);
    const valid = validSymbol && !invalidDigital;
    if (!validSymbol || invalidDigital) {
      throw Error('введите корректное имя');
    }
    return valid;
  }
}

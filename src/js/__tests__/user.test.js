import Validator from '../app';

test('Validator', () => {
  expect(() => {
    const userName = new Validator('_12ffg');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator', () => {
  expect(() => {
    const userName = new Validator('12ffg-');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator', () => {
  expect(() => {
    const userName = new Validator('1233ffg');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator', () => {
  expect(() => {
    const userName = new Validator('f1233ffg');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator', () => {
  expect(() => {
    const userName = new Validator('f123%3ffg');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator', () => {
  expect(() => {
    const userName = new Validator('Cat12');
    userName.validateUsername();
  }).toThrow('введите корректное имя');
});

test('Validator True', () => {
  const userName = new Validator('Cat12Cat');
  const validName = userName.validateUsername();
  expect(validName).toBe(true);
});

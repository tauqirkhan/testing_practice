import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyseArray,
} from "./functions.js";

test("Capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Reverse a string", () => {
  expect(reverse("hello")).toBe("olleh");
  expect(reverse("world")).toBe("dlrow");
  expect(reverse("hello, world")).toBe("dlrow ,olleh");
});

test("Calculator with add, sub, div and mul methods", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(2, 3.54)).toBe(5.54);
  expect(calculator.add(2, 3.56)).toBe(5.56);
  expect(calculator.sub(4, 3)).toBe(1);
  expect(calculator.sub(2, 3)).toBe(-1);
  expect(calculator.sub(3.45, 2.103)).toBe(1.35);
  expect(calculator.div(4, 2)).toBe(2);
  expect(calculator.div(2, 3)).toBe(0.67);
  expect(calculator.div(7, 3)).toBe(2.33);
  expect(calculator.mul(3, 3)).toBe(9);
  expect(calculator.mul(4.55, 3)).toBe(13.65);
  expect(calculator.mul(4.559, 3)).toBe(13.68);
});

test("Ciphering the string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyse the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyseArray([2, 9, 5, 4, 3, 7])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 6,
  });
});

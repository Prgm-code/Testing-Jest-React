const mensaje = "Hola Mundo";
const fruits = ["manzana", "pera", "uva"];

const reverseString = (str: string, callback: Function) => {
  callback(str.split("").reverse().join(""));
};
const reverseString2 = (str: string) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};
test("debe contener un texto", () => {
  expect(mensaje).toMatch(/Mundo/);
});
test("tiene una uva", () => {
  expect(fruits).toContain("uva");
});
test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});
test("Verdadero", () => {
  expect(true).toBeTruthy();
});
test("Falso", () => {
  expect(false).toBeFalsy();
});
test("Nulo", () => {
  expect(null).toBeNull();
});
test("Probando un Callback", () => {
  reverseString("Hola", (str: String) => {
    expect(str).toBe("aloH");
  });
});
test("Probando una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});
test("probar async/await", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});
test
//afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

beforeAll(() => console.log("Antes de todas las pruebas"));
//beforeEach(() => console.log("Antes de cada prueba"));

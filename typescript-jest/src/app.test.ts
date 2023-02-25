import randomString from "./app";


describe("Probar funcionalidades", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomString()).toBe("string");
  });

  test("comprobar que no existe una ciudad", () => {
    expect(randomString()).not.toMatch(/Iquique/);
  });
});

  
const manager = require("../lib/manager");
const employee = require("../lib/employee");
describe("manager", () => {
it("returns phone number", () => {
  const test = 100;
  const e = new manager("Foo", 1, "test@test.com", test);
  expect(e.phone).toBe(test);
});

it("returns as manager", () => {
  const test = "manager";
  const e = new manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(test);
});

it("Can get office number via getOffice()", () => {
  const test = 100;
  const e = new manager("Foo", 1, "test@test.com", test);
  expect(e.getOfficeNumber()).toBe(test);
})
})
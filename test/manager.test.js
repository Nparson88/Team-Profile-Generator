  
const manager = require("../lib/manager");
const employee = require("../lib/employee");
describe("manager", () => {
it("returns phone number", () => {
  const test = 555-555-5555;
  const e = new manager("tobi", 1, "tobi@email.com", test);
  expect(e.phone).toBe(test);
});

it("returns as manager", () => {
  const test = "manager";
  const e = new manager("tobi", 1, "tobi@email.com", 555-555-5555);
  expect(e.getRole()).toBe(test);
});

it("Can get office number via getOffice()", () => {
  const test = 555-555-5555;
  const e = new manager("tobi", 1, "tobi@email.com", test);
  expect(e.getOfficeNumber()).toBe(test);
})
})
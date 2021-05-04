
const intern = require("../lib/intern");
describe("intern", () => {
it("set a school parameter", () => {
  const test = "case western";
  const e = new intern("jimmy", 1, "jimmy@yahoo.com", test);
  expect(e.school).toBe(test);
});

it("should return role of intern", () => {
  const test = "intern";
  const e = new intern("jimmy", 1, "jimmy@yahoo.com", "case western");
  expect(e.getRole()).toBe(test);
});

it("Can get school via getSchool()", () => {
  const test = "case western";
  const e = new intern("jimmy", 1, "jimmy@yahoo.com", test);
  expect(e.getSchool()).toBe(test);
})
})
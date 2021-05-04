const engineer = require("../lib/engineer");
describe("engineer", () => {
it("Can set Github account", () => {
  const test = "GitHubUser";
  const e = new engineer("drake", 1, " drake@gmail.com", test);
  expect(e.github).toBe(test);
});

it("should return as engineer", () => {
  const test = "engineer";
  const e = new engineer("drake", 1, "drake@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(test);
});

it("Can get GitHub username via getGithub()", () => {
  const test = "GitHubUser";
  const e = new engineer("drake", 1, "drake@gmail.com", test);
  expect(e.getGithub()).toBe(test);
})
})
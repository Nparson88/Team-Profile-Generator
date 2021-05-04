const employee = require("../lib/employee");

describe("employee", () => {

    it("should return a name input", () => {

        const test = new employee("josh");

        expect(test.name).toEqual("josh");
    });

    it("should return a number for employee", () => {
        const test = new employee("josh", "1");

        expect(test.number).toEqual("1");
    });

    it("should return an email address", () => {
        const test = new employee("josh", "1", "josh@gmail.com");

        expect(test.email).toEqual("josh@gmail.com");
    });

    it("should return employee role", () => {
        const test = new employee("josh", "1", "josh@gmail.com");

        expect(test.title).toEqual("employee");
    });


});
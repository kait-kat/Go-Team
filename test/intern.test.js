const Intern = require("../lib/intern.js");

test("School create", () => {
    const testSchool = "CAT: School for Cats";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing office number", () => {
    const testSchool = "CAT: School for Cats";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Test role", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", "CAT: School for Cats");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
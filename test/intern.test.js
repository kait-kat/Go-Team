const Intern = require("../lib/intern.js");

test("Can create school.", () => {
    const testSchool = "CAT: School for Cats";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "CAT: School for Cats";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Kat", 2, "kat@kat.com", "CAT: School for Cats");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
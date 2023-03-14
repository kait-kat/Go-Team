const Engineer = require("../lib/engineer.js");

test("Github create", () => {
    const testGithub = "katsandkats";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Test Github", () => {
    const testGithub = "katsandkats";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Test role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", "Kat");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
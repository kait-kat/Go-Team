const Engineer = require("../lib/engineer.js");

test("Can create a github.", () => {
    const testGithub = "katsandkats";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "katsandkats";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kat", 2, "kat@kat.com", "Kat");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
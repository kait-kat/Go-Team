const Manager = require("../lib/manager.js");

test("Office number successful", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Kat", 2, "kat@kat.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test office number", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Kat", 2, "kat@kat.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Test role", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Kat", 2, "kat@kat.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});
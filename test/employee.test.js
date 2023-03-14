const Employee = require("../lib/employee.js");

test("Employee Test", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test name", () => {
    const name = "Kat";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test ID", () => {
    const id = 2;
    const employeeInstance = new Employee("Kat", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test email", () => {
    const email = "kat@kat.com";
    const employeeInstance = new Employee("Kat", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Get names", () => {
    const testName = "Kat";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID successful", () => {
    const testID = 2;
    const employeeInstance = new Employee("Kat", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test email successful", () => {
    const testEmail = "kat@kat.com";
    const employeeInstance = new Employee("Kat", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Test role", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Kat", 2, "kat@kat.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
const Employee = require("../lib/employee");

test("testing getName method.", () => {
    const testName = "Paul";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("testing getID method.", () => {
    const testID = 7;
    const employeeInstance = new Employee("Paul", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("testing getEmail method.", () => {
    const testEmail = "paulsong29@gmail.com";
    const employeeInstance = new Employee("Paul", 7, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("testing getRole.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Paul", 7, "paulsong29@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
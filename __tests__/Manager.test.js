const Manager = require("../lib/manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Paul", 7, "paulsong29@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Paul", 7, "paulsong29@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Paul", 7, "paulsong29@gmail.com", 11);
    expect(employeeInstance.getRole()).toBe(returnValue);
});

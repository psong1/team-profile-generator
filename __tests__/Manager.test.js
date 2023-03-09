const Manager = require("../lib/manager");

test("testing getOfficeNumber", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Paul", 7, "paulsong29@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("testing getRole", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Paul", 7, "paulsong29@gmail.com", 11);
    expect(employeeInstance.getRole()).toBe(returnValue);
});

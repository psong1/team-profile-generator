const Intern = require("../lib/intern");

test("testing getSchool", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Paul", 2, "paulsong29@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("testing getRole", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Paul", 2, "paulsong29@gmail.com", "GA Tech");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
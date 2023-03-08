const Intern = require("../lib/intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Paul", 2, "paulsong29@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Paul", 2, "paulsong29@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Paul", 2, "paulsong29@gmail.com", "GA Tech");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
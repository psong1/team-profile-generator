const Engineer = require("../lib/engineer");

test("testing getGithub", () => {
    const testGithub = "psong1";
    const employeeInstance = new Engineer("Paul", 7, "paulsong29@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("testing getRole", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Paul", 7, "paulsong29@gmail.com", "psong1");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
const Engineer = require("../lib/engineer");

test("Can create a github.", () => {
    const testGithub = "psong1";
    const employeeInstance = new Engineer("Paul", 7, "paulsong29@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "psong1";
    const employeeInstance = new Engineer("Paul", 7, "paulsong29@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Paul", 7, "paulsong29@gmail.com", "psong1");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
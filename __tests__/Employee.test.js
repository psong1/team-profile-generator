const Employee = require("../lib/employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Paul";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 7;
    const employeeInstance = new Employee("Paul", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "paulsong29@gmail.com";
    const employeeInstance = new Employee("Paul", 7, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Paul";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 7;
    const employeeInstance = new Employee("Paul", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "paulsong29@gmail.com";
    const employeeInstance = new Employee("Paul", 7, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Paul", 7, "paulsong29@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
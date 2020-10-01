const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');
// console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Mocker', 1, 'mocker@company.com');

    expect(employee.name).toBe('Mocker');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test("gets employee name as an object", () => {
    const employee = new Employee('Mocker');

    expect(employee.getName()).toHaveProperty('name');
});

test("gets employee id as an object", () => {
    const employee = new Employee('Mocker');

    expect(employee.getId()).toHaveProperty('id');
});

test("gets employee email as an object", () => {
    const employee = new Employee('Mocker');

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee role as an object", () => {
    const employee = new Employee('Mocker');

    expect(employee.getRole()).toHaveProperty('role', 'Employee');
});
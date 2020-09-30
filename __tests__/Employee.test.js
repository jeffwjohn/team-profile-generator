const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jody');

    expect(employee.name).toBe('Jody');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});
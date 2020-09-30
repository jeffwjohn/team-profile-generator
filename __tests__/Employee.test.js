const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');
// console.log(new Employee());

test('creates an employee object', () => {
    const employee = new Employee('Mocker');

    expect(employee.name).toBe('Mocker');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});
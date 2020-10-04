const Manager = require('../lib/Manager');

console.log(new Manager());


test('creates a manager object', () => {
    const manager = new Manager('Mocker', 1, 'mocker@company.com', '100A', 'Team Name');

    expect(manager.name).toBe('Mocker');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.team).toEqual(expect.any(String));
   
});

test("get office number as an object", () => {
    const manager = new Manager('Mocker');

    expect(manager.getOfficeNumber()).toHaveProperty('officeNumber');
});

test("gets manager role as an object", () => {
    const manager = new Manager('Mocker');

    expect(manager.getRole()).toHaveProperty('role', 'Manager');
});


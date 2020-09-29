// const { template } = require('@babel/core');
// const { exportAllDeclaration } = require('@babel/types');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jody');

    expect(manager.name).toBe('Jody');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

});
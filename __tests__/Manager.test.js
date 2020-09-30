// const { template } = require('@babel/core');
// const { exportAllDeclaration } = require('@babel/types');
const Manager = require('../lib/Manager');

jest.mock('../lib/Manager');

console.log(new Manager());

test('creates a manager object', () => {
    const manager = new Manager('Mocker');

    expect(manager.name).toBe('Mocker');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

});
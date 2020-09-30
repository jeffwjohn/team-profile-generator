const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jody');

    expect(intern.name).toBe('Jody');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jody', 2, 'jody@company.com', 'jody76');

    expect(engineer.name).toBe('Jody');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets engineer GitHub username as an object", () => {
    const engineer = new Engineer('Mocker');

    expect(engineer.getGithub()).toHaveProperty('github');
});

test("gets engineer role as an object", () => {
    const engineer = new Engineer('Mocker');

    expect(engineer.getRole()).toHaveProperty('role', 'Engineer');
});
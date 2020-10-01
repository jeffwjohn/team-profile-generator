const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Monica', 3, 'monica@company.com', 'Harvard');

    expect(intern.name).toBe('Monica');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("gets intern school as an object", () => {
    const intern = new Intern('Mocker');

    expect(intern.getSchool()).toHaveProperty('school');
});

test("gets intern role as an object", () => {
    const intern = new Intern('Mocker');

    expect(intern.getRole()).toHaveProperty('role', 'Intern');
});
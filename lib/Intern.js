const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = '';
    }

    getSchool() {
        return {
            school: this.school
        }
    }

    getRole() {
        return {
            role: "Intern"
        }
    }
}

module.exports = Intern;
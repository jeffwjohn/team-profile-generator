const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, team) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.team = team;

    }

    getOfficeNumber() {
        return {
            officeNumber: this.officeNumber
        }
    }

    getRole() {
        return {
            role: 'Manager'
        }
    };
}

module.exports = Manager;
// const { number } = require("yargs");

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 1;
        this.email = '';
    }

    getName() {
        return {
            name: this.name
        }
    };

    getId() {
        return {
            id: this.id
        }
    }

    getEmail() {
        return {
            email: this.email
        }
    }

    getRole() {
        return {
            role: 'Employee'
        }
    };
}

module.exports = Employee;
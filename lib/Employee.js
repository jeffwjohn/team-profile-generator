// const { number } = require("yargs");

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 5 + 7);
        this.email = '';
    }

    getName() {

    };

    getId () {

    }

    getEmail() {

    }

    getRole() {

    }
}

module.exports = Employee;

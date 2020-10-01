module.exports = function () {
    this.name = 'Mocker';
    this.id = 1;
    this.email = 'mocker@company.com';
    this.officeNumber = '100A';
};

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

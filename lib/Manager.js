const Employee = require('./Employee');

class Manager extends Employee {
    super(name, id, email);

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager
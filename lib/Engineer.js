const Employee = require('./Employee');

class Engineer extends Employee {
    super(name, id, email);

    constructor(github) {
        this.github = github;
    }

    getGithub()

}

module.exports = Engineer
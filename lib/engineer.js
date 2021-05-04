const employee = require("./employee");
class engineer extends employee {
    constructor(name, number, email, github) {
        super(name, number, email);
        this.github = github;
        this.title = 'engineer'
    }

    getRole() {
        return "engineer";
    }

    getGithub() {
        return this.github;
    }

}
module.exports = engineer;
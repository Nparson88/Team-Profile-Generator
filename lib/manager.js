const employee = require("./employee");
class manager extends employee {
    constructor(name, number, email, phone) {
        super(name, number, email);
        this.phone = phone;
        this.title = 'manager'
    }

    getRole() {
        return "manager";
    }

    getOfficeNumber() {
        return this.phone;
    }

}
module.exports = manager;
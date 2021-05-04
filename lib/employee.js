
class employee {
    constructor(name, number, email) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.title = 'employee'
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "employee";
    }

}
module.exports = employee;
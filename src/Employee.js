
class Employee {
    constructor(id, name, salary) {
        if (new.target === Employee) {
            throw new TypeError("Cannot construct Employee instances directly");
        }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `Employee ID: ${this.id}, ${this.name} earns ${this.salary}`;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary) {
        this.salary = newSalary;
    }
}

module.exports = Employee;
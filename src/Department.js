
class Department {
    constructor(id, name) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee) {
        this.employees = this.employees.filter(e => e.getId() !== employee.getId());
    }

    getDetails() {
        return `Department ID: ${this.id}, Name: ${this.name}, Employees: ${this.employees.length}`;
    }

    getEmployees() {
        return this.employees;
    }
}

module.exports = Department;
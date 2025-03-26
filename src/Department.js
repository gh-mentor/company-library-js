
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

    /*
    TODO:
    - add null or undefined check for employee
    - Add error handling for employee with id = 0
    - Add error handling for duplicate employee
    */
    addEmployee(employee) {
        this.employees.push(employee);
    }

    /*
    TODO:
    - Add error handling for employee with id = 0
    - Add error handling for duplicate employee
    */
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
// require the Employee class
const Employee = require('./Employee');


class Manager extends Employee {
    /*
    * TODO:
    * 1) Define a separate method to set the department of the manager.
    * This method should throw an error if the department is not a string.
    * 2) The constructor must check that all 4 arguments are provided and that the department is a string.
    */
    constructor(id, name, salary, department) {
      if (!id || !name || !salary || !department) {
        throw new Error('All arguments must be provided');
      }
      if (typeof department !== 'string') {
        throw new Error('Department must be a string');
      }
      super(id, name, salary);
    this.department = department;
  }

  /**
   * Sets the department of the manager.
   * @param {string} department - The department to set.
   * @throws {Error} If the department is not a string.
   */
  setDepartment(department) {
    if (typeof department !== 'string') {
      throw new Error('Department must be a string');
    }
    this.department = department;
  }

  /**
   * Gets the details of the manager.
   * @returns {string} The details of the manager.
   */
  getDetails() {
    return `${super.getDetails()} and manages the ${this.department} department`;
  }

  /**
   * Gets the department of the manager.
   * @returns {string} The department of the manager.
   */
  getDepartment() {
    return this.department;
  }
}

module.exports = Manager;


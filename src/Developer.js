const Employee = require('./Employee');

/**
 * Class representing a Developer.
 * @extends Employee
 */
class Developer extends Employee {
  /**
   * Create a Developer.
   * @param {string} id - The ID of the developer.
   * @param {string} name - The name of the developer.
   * @param {number} salary - The salary of the developer.
   * @param {string} programmingLanguage - The programming language of the developer.
   */
  constructor(id, name, salary, programmingLanguage) {
    super(id, name, salary);
    /*
    * TODO:
    * 1) Refactor the code so that the `programmingLanguage` property is set using a `setProgrammingLanguage` method. The method should validate that the `programmingLanguage` is a string and throw an error if it is not.
    * 2) Modify the test 'tests/Developer.test.js' to test the `setProgrammingLanguage` method.
    */
    this.programmingLanguage = programmingLanguage;
  }

  /**
   * Get the details of the developer.
   * @returns {string} The details of the developer.
   */
  getDetails() {
    return `Employee ID: ${this.id}, ${this.name} earns ${this.salary} and codes in ${this.programmingLanguage}`;
  }
}

module.exports = Developer;
const Manager = require('../src/Manager');

/*
Test case 1:
Create a Manager object with the ID 1, name 'Jane Doe', salary 60000, and department 'HR'. Verify that the manager has been created successfully.
*/
test('Manager can be instantiated with valid arguments', () => {
    const manager = new Manager(1, 'Jane Doe', 60000, 'HR');
    expect(manager.getId()).toBe(1);
    expect(manager.getName()).toBe('Jane Doe');
    expect(manager.getSalary()).toBe(60000);
    expect(manager.getDepartment()).toBe('HR');
});

/*
Test case 2:
Verify that an error is thrown when trying to instantiate a Manager object without all required arguments.
*/
test('Manager constructor throws error if arguments are missing', () => {
    expect(() => new Manager(1, 'Jane Doe', 60000)).toThrow('All arguments must be provided');
});

/*
Test case 3:
Verify that an error is thrown when the department is not a string.
*/
test('Manager constructor throws error if department is not a string', () => {
    expect(() => new Manager(1, 'Jane Doe', 60000, 123)).toThrow('Department must be a string');
});

/*
Test case 4:
Verify that the setDepartment method throws an error if the department is not a string.
*/
test('Manager setDepartment method throws error if department is not a string', () => {
    const manager = new Manager(1, 'Jane Doe', 60000, 'HR');
    expect(() => manager.setDepartment(123)).toThrow('Department must be a string');
});

/*
Test case 5:
Verify that the getDetails method returns the correct string.
*/
test('Manager getDetails method works', () => {
    const manager = new Manager(1, 'Jane Doe', 60000, 'HR');
    expect(manager.getDetails()).toBe('Employee ID: 1, Jane Doe earns 60000 and manages the HR department');
});

/*
Test case 6:
Verify that the getDepartment method returns the correct department.
*/
test('Manager getDepartment method works', () => {
    const manager = new Manager(1, 'Jane Doe', 60000, 'HR');
    expect(manager.getDepartment()).toBe('HR');
});
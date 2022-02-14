const Employee = require("../lib/Employee");

describe('Employee', () => {
    describe("getName", () => {
        it('should return the given name', () => {
            const name = 'Alex';
            const employee = new Employee(name);
    
            expect(employee.getName()).toEqual(name);
        });
    });
    
    describe("getId", () => {
        it('should return the given id', () => {
            const id = 100;
            const employee = new Employee("employee", id, "test@email.com");
    
            expect(employee.getId()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it('should return the given email', () => {
            const email = "test@email.com"
            const employee = new Employee("employee", 0, email);
    
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getRole", () => {
        it('should return Employee', () => {
            const employee = new Employee("employee", 0, "test@email.com");
    
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
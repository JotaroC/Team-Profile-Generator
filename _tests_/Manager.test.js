const Manager = require("../lib/Manager");

describe('Manager', () => {
    describe("getOfficeNumber", () => {
        it('should return the given office number', () => {
            const officeNumber = 0;
            const manager = new Manager("Alex", 0, "test@email.com", officeNumber);
    
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    
    describe("getRole", () => {
        it('should return Manager', () => {
            const manager = new Manager("Alex", 0, "test@email.com", 0);
    
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
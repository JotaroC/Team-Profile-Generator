const Intern = require("../lib/Intern");

describe('Intern', () => {
    describe("getSchool", () => {
        it('should return the given school', () => {
            const school = 'School A';
            const intern = new Intern("Alex", 0, "test@email.com", school);
    
            expect(intern.getSchool()).toEqual(school);
        });
    });
    
    describe("getRole", () => {
        it('should return Intern', () => {
            const intern = new Intern("Alex", 0, "test@email.com", "School A");
    
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
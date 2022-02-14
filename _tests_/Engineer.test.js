const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    describe("getGithub", () => {
        it('should return the given github username', () => {
            const github = 'AlexGit';
            const engineer = new Engineer("Alex", 0, "test@email.com", github);
    
            expect(engineer.getGithub()).toEqual(github);
        });
    });
    
    describe("getRole", () => {
        it('should return Engineer', () => {
            const engineer = new Engineer("Alex", 0, "test@email.com", "AlexGit");
    
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
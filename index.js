const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Asking information of development team members, and to create objects for each team member
const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter manager's office number." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's GitHub." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter intern's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter a valid email address.' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the name of school." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Do you want to add another employee",
            choices: ["yes", "no"]
        }
    ]
};

const selectMemberType = [
    {
        type: "list",
        name: "memberType",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

//imports and dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

//prompts

const messagePrompt = {
    viewEmployees: "View all Employees",
    viewEmployeeDepartment: "View all employees by their Department",
    viewEmployeeManager: "View all employees by their Manager",
    viewRoles: "View all Employee Roles",
    addEmployee: "Add an Employee",
    deleteEmployeee: "Remove an Employee",
    updateRole: "Update an Employee Role",
    updateManager: "Update the Manager for an Employee",
    exit: "Exit Program"
};

//add the connection
const connection = mysql.createConnection({
    host: 'localhost',
//Port
    port:3306,
    //username
    user: 'root',

    //password
    password: 'root',

    //database
    database: 'employee_db'
});


//==================================================================================================================================
//VIEW
//==================================================================================================================================
//view all of the departments 
const viewDepartments = async () => {
    try {
        const [results] = await connection.promise()
    }

}

//view employees
const viewEmployee = async () => {
    const [results] = await connection.promise()
}

//view roles
const viewRoles = async () => {
    const [results] = await connection.promise()

}


//view Salary
const viewSalary = async () => {
    try {
        const[results] = await connection.promise.query 
    }
}

//view employees
const viewEmployeeDepartment = async () => {
    const [results] = await connection.promise()
}

//view employees
const viewEmployeeManager = async () => {
    const [results] = await connection.promise()
}

//==================================================================================================================================
//DEPARTMENTS
//==================================================================================================================================

//add department
const addDepartments = async () => {
    const answer = await inquirer.prompt([

    ])
}

//==================================================================================================================================
//ROLES
//==================================================================================================================================\
//add department
const addRole = async () => {
    const answer = await inquirer.prompt([

    ])
}

//==================================================================================================================================
//EMPLOYEES
//==================================================================================================================================
//add department
const addEmployee = async () => {
    const answer = await inquirer.prompt([

    ])
}

const deleteEmployee = async() => {

}

const updateEmployeeRole = async() => {

}

const updateEmployeeManager = async() => {

}
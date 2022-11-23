//imports and dependencies
import mysql from 'mysql2'
import inquirer from 'inquirer'

//add the connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company-employee-database.db'
})
//==================================================================================================================================
//VIEW
//==================================================================================================================================
//view all of the departments 
const viewDepartments = async () => {

}

//view employees
const viewEmployee = async () => {

}

//view roles
const viewRoles = async () => {

}


//view Salary
const viewSalary = async () => {

}

//view employees
const viewEmployeeDepartment = async () => {

}

//view employees
const viewEmployeeManager = async () => {

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
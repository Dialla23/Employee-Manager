const inquirer = require('inquirer')
const mysql = require('mysql2')

let question = [{
    "type": "list",
    "name":"userchoice",
    "message": "select the operation perform",
    "choices": ["view all employee","view all department"]
}]
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Fatima1997$',
    database: 'employeemanager'
  },
  console.log(`Connected to the classlist_db database.`)
);

function init(){
    inquirer.prompt(question).then((data)=>{
        let answer = data.userchoice
        if (answer === "view all employee"){
            viewAllEmployee()
        }else if (answer === "view all department"){
            viewAllDepartment()
        }
        
    })
}

function viewAllEmployee(){
    db.query("select * from employees",(err,data)=>{
        if(err) console.log(err)
        console.table(data)
        init()
    })
}

function viewAllDepartment(){
    db.query("select * from department",(err,data)=>{
        if(err) console.log(err)
        console.table(data)
        init()
    })
}

init()
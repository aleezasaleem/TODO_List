import inquirer from "inquirer";
async function todolist(){
    let {task}= await inquirer.prompt([{
        type:"input",
        name:"task",
        message:"What would you like to add?"
    }]);
    console.log(`Added task: ${task}`);
    
}
todolist()
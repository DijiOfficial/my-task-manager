const prompt = require("prompt-sync")();
const fsLibrary = require("fs");

// var fso = new ActiveXObject("Scripting.FileSystemObject");
var txt = fsLibrary.readFileSync("tasks.txt", "utf8");

let test4 = 1, test5 = 1, valid = [1,2,3,4,5];
var doneTask = [];
// function createTasksFile(){
//     try {
//         var txt = fsLibrary.readFileSync("tasks.txt", "utf8");
//         return txt;
//     } catch {
//         fso.CreateTextFile("tasks.txt", true);
//     }
// }

function createTasksList(){
    // createTasksFile();
    if (txt.length > 0){
        var array = txt.split(",");
    } else {
        var array = [];
    }
    return array;
}

function readTasks(tasks){
    if (tasks.length == 0){
        console.log("\nThere are no tasks. ");
    } else if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++){
            console.log(i+1 + ". " + tasks[i]);
        }
    } else {
        console.log("ayo what?");
    }
}

function addTask(tasks){
    var data = prompt("Add a task: ");
    tasks.push(data);
}

function removeTask(tasks){
    var retry = true;
    while (retry == true){
        var remove = prompt("Which task to remove: ");
        if (tasks.length == 0){
            console.log("There are no tasks to remove.");
            retry = false;
        } else if (tasks.includes(remove) == true){
            tasks.splice(remove, 1);
            retry = false;
        } else {
            console.log("Is not a task");
            retry = true;
        }
    }
}

function markTasksDone(tasks){
    let again = true;
    while (again == true){
        console.log("These are your tasks:");
        readTasks(tasks);
        console.log("These are your done tasks:");
        readTasks(doneTask);
        var done = prompt("Which task to mark as done?: ");
        if (tasks.length == doneTask.length){
            console.log("There are no tasks to mark as done.");
            again = false;
        } else if (tasks.includes(done) == true){
            doneTask.push(done);
            again = false;
        } else {
            console.log("Is not a task");
            again = true;
        }
    }
}

function main() {
    var tasks = createTasksList();
    console.log(tasks);
    while (test4 == 1 || test5 == 1){
        try {
            console.log('\nWelcome to your task manager, Press:\n\n\t1. to see all your tasks\n\n\t2. to add a task\n\n\t3. to delete a task\n\n\t4. to mark a task as done\n\n\t5. to Exit the task manager\n')
            var n = parseInt(prompt("What to do?: "));
            if (n/1 == n && valid.includes(n) == true){
                if (n == 1){
                    readTasks(tasks);
                } else if (n == 2){
                    addTask(tasks);
                } else if (n == 3){
                    console.log(tasks);
                    removeTask(tasks);
                } else if (n == 4){
                    markTasksDone(tasks);
                } else if (n == 5){
                    test5 = 0;
                } else {
                    console.log("ayo what?");
                }
                test4 = 0;
            } else {
                test4 = 1;
            }
        } finally {
            if (test4 == 1){
                console.log("\nInvalid number try again.\n");
            }
        }
    }
    return tasks;
}

var tasks = main();

fsLibrary.writeFile('tasks.txt', tasks, (error) => {
    
    if (error) throw err;
});
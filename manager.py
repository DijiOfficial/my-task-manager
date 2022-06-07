valid = [1,2,3,4,5]
task = []
taskDone = []

def readTask(task):
    if len(task) == 0:
        print("No tasks")
    else:
        for i in task:
            print(i)

def addTask(task):
    new = str(input("what to add? "))
    task.append(new)

def removeTask(task):
    retry = True
    while retry:
        if len(task) == 0:
            print("No task to remove")
            retry = False
        else:
            remove = str(input("what to remove? "))
            if remove in task:
                task.remove(remove)
                retry = False
            else :
                print("Is not a task")
                retry = True

def markTaskDone(task):
    retry = True
    while retry:
        print("These are your tasks: ")
        readTask(task)
        print("These are your done tasks")
        readTask(taskDone)
        done = str(input("Which task to mark as done: "))
        if len(task) == len(taskDone):
            print("There are no more tasks")
            retry = False
        elif done in task:
            taskDone.append(done)
            retry = False
        else:
            print("Is not a task")
            retry = True

def main(task):
    test4, test5 = 1,1
    while test4 == 1 or test5 == 1 :
        try:
            print('\nWelcome to your task manager, Press:\n\n\t1. to see all your tasks\n\n\t2. to add a task\n\n\t3. to delete a task\n\n\t4. to mark a task as done\n\n\t5. to Exit the task manager\n')
            n = int(input("what to do? "))
            if n in valid:
                if n == 1:
                    readTask(task)
                elif n == 2:
                    addTask(task)
                elif n == 3:
                    removeTask(task)
                elif n == 4:
                    markTaskDone(task)
                elif n == 5:
                    test5 = 0
                else:
                    print("huh what?")
                test4 = 0
            else:
                test4 = 1
        except:
            print("\nInvalid number try again.\n")

main(task)

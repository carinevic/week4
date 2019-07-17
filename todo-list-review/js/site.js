let taskTitleTextBox = document.getElementById("taskTitleTextBox")
let saveTaskButton = document.getElementById("saveTaskButton")
let pendingTaskList = document.getElementById("pendingTaskList")

saveTaskButton.addEventListener('click', () => {
    
    let title = taskTitleTextBox.value 

    // create a new task div 
    let taskDiv = document.createElement("div")

    // checkbox , label, remove button
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    
    let taskTitle = document.createElement("h3")
    taskTitle.innerHTML = title

    let removeButton = document.createElement("button")
    removeButton.innerHTML = "REMOVE"
    removeButton.addEventListener('click',() => {
        if(this.parentElement) {
            pendingTaskList.removeChild(this.parentElement)
        }
    })

    taskDiv.appendChild(checkbox)
    taskDiv.appendChild(taskTitle)
    taskDiv.appendChild(removeButton)

    pendingTaskList.appendChild(taskDiv)


    // add the new task to the pending task list 

})
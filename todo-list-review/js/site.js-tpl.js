let taskTitleTextBox = document.getElementById("taskTitleTextBox")
let saveTaskButton = document.getElementById("saveTaskButton")
let pendingTaskList = document.getElementById("pendingTaskList")

function removeTask(btn) {
    console.log(btn)
    pendingTaskList.removeChild(btn.parentElement)
}

function removeTask2(e) {
    console.log(e.srcElement.parentElement)
}

saveTaskButton.addEventListener('click',() => {

    let title = taskTitleTextBox.value
    let age = 10 

    let taskItemDIV = `<div class='task-div-item'>
                        <input type='checkbox' />
                        <label>${title}, ${age}</label>
                        <button onclick='removeTask(this)'>Remove</button>
                        <button onclick='removeTask2(event)'>Remove 2</button>
                    </div>`

    
    pendingTaskList.insertAdjacentHTML('beforeend',taskItemDIV)

})


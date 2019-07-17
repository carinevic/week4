let task= document.getElementById("task")

let addbutton = document.getElementById("addButton")
let pendingTaskList = document.getElementById("pendingTaskList")
let completedTaskList = document.getElementById("completedTaskList")
//the buttonfunction
addButton.addEventListener ("click", function(){ 
    console.log("Add")

    let pendingspan = document.createElement("span")
    pendingspan.innerHTML = task.value
     

     let listItem = document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")


    let remove = document.createElement("button")
    remove.innerHTML= "remove"

   listItem.append(checkbox)
   listItem.append(pendingspan) 
   listItem.append(remove) 



   pendingTaskList.append(listItem)

    checkbox.addEventListener("click",function(){
    console.log("check")

    if(this.checked){
        completedTaskList.append(listItem)
    }else{
        pendingTaskList.append(listItem)
    }

})

    remove.addEventListener("click", function(){
    console.log("removed")
    if(pendingTaskList.contains(listItem)){
      pendingTaskList.removeChild(listItem)
    }else if( completedTaskList.contains(listItem)){
        completedTaskList.removeChild(listItem)

    }


})


})










$(document).ready(() => {
    
    //$(".classname") // elements by class name

    //$("p") // elements by tag name 

    // # means to search using id 
    let taskTitleTextBox = $("#taskTitleTextBox") 
    let taskItemsDiv = $("#taskItemsDiv")
    let copyrightInfo = $("#copyrightInfo")

    $("#btnAdd").click(() => {

        let title = taskTitleTextBox.val()
        console.log(title)

        let taskItemDiv = $("<div>")

        taskItemDiv.css("background-color","yellow")
            .append($("<div>"))

        // html is innerHTML 
        taskItemDiv.html(title)

        taskItemsDiv.append(taskItemDiv)

        //let taskItemDiv = document.createElement("div")

    })

    $("#showCopyright").click(() => {

        copyrightInfo.fadeToggle(500)
            

    })
    






})
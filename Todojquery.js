$(document).ready(()=>{
    let tasktextBox = $("#task")
    let choreList = $("#choreDiv")
    let completedtask=$("#completedDiv")
    
    $("#addButton").click(() =>{
        let checkBox = $("<input type='checkbox'/>")
        let taskname = tasktextBox.val()
        /*let checkBox = $("<input type='checkbox'/>")*/
        let removebtn =$("<button> remove</button>")
    removebtn.click( function(){
        console.log(this)
        this.parentElement.remove()
    })
        let dailychore =$("<div>")

        
        dailychore.html(taskname)
        dailychore.append(checkBox)
        dailychore.append(removebtn)
       
        choreList.append(dailychore)
       completedtask.append(dailychore)

       
$("#checkbtn").click(()=>{
    console.log(this)
    if(this.check){ 
    completed.append(dailychore)
    }else{
        choreList.append(dailychore)
    }
    
});

    
    

});
});
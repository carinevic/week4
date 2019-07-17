
getRandomAd() 


// saveVacationInfo is new function to handle save button click
/*
function saveVacationInfo() {
    console.log("saveVacationInfo")
} */

let saveButton = document.getElementById("saveButton")
let cityTextBox = document.getElementById('cityTextBox')
// vacation div is empty and this is where we will inject other HTML elements
let vacationListDiv = document.getElementById("vacationListDiv")

let cityImageURLTextBox = document.getElementById("cityImageURLTextBox")

// Using anonymous function because this function is only called on button click and no where else..
saveButton.addEventListener('click',function() {
    console.log("button click fired...")

   let city = cityTextBox.value
   let cityImageURL = cityImageURLTextBox.value 

   // create a DIV element 
    let vacationDiv = document.createElement("div")
    
    // create a span tag 
    let vacationTitleSpan = document.createElement("span")
    vacationTitleSpan.innerHTML = city 

    // create an image tag 
    let vacationCityImage = document.createElement("img")
    vacationCityImage.src = cityImageURL
    vacationCityImage.className = "vacation-image"

    vacationDiv.appendChild(vacationTitleSpan)
    vacationDiv.appendChild(vacationCityImage)

    vacationListDiv.appendChild(vacationDiv)

})
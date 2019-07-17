
let photosListDiv = document.getElementById("photosListDiv")

let photosDiv = photos.map(photo => {

    let photoDiv = `<div>
                        <h3>${photo.title}</h3>
                        <img src='${photo.thumbnailUrl}'></img>
                    </div>`

    return photoDiv
})

photosListDiv.innerHTML = photosDiv.join('')




/*
let numbers = [3,4,5,6,7]

/*
for(let index = 0; index< numbers.length; index++) {
    console.log(numbers[index])
} */

// forEach
/*
numbers.forEach(function(no) {
    console.log(no)
}) */

/*
let numbersDoubled = numbers.map(function(no) {
    return no * 2 
}) */

// using arrow functions 
/*
let numbersDoubled = numbers.map((no) =>  {
    return no * 2 
}) */

// using arrow functions that have one line of code in the body 
/*
let numbersDoubled = numbers.map(no => no * 2 )

console.log(numbersDoubled)

// filter 

let evenNumbers = numbers.filter(function(no) {
    return no % 2 == 0
})

console.log(evenNumbers)
*/

//let evenNumbers = numbers.filter(no => no % 2 == 0)
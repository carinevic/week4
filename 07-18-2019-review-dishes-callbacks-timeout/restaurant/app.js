let dishesDiv = document.getElementById("dishesDiv")
let dishCourseSelectList = document.getElementById('dishCourseSelectList')

dishCourseSelectList.addEventListener('change',function() {

    let course = this.value 

    let filteredDishes = dishes.filter((dish) => dish.course.toLowerCase() == course)
    populateDishes(filteredDishes)
})

function populateDishes(displayToDisplay) {
    let dishList = displayToDisplay.map(dish => {
        return `<div class="dish-item">
                    <img src='${dish.imageURL}' />
                    <label>${dish.title}</label>
                    <label>${dish.price}</label>

                </div>
                `
    })

    dishesDiv.innerHTML = dishList.join('')
}

// display all the dishes 
populateDishes(dishes) 


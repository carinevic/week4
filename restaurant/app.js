let resturantMenuDiv= document.getElementById("resturantMenuDiv")
let menuOption= document.getElementById("menuOption")
let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("dessert")
let fullmenu = document.getElementById("fullMenu")
/* main pagemenu*/
let dishesDiv = dishes.map (dishes => {

    let dishesDiv = `<div>

    <h3>${dishes.title}</h3>
    <h4>${dishes.description}</h4>
    <h2>${dishes.price}</h2>
    <img src='${dishes.imageURL}'></img>
    <h3>${dishes.course}</h3>

    </div>`

    return dishesDiv
})
menuOption.innerHTML = dishesDiv.join('')

fullmenu.addEventListener('click', function(){
    console.log("fullmemu")
    menuOption.innerHTML = dishesDiv.join('')
    
})

/* optional page for starters menu*/
starters.addEventListener('click',function(){
    let startersDishes = dishes.filter(function(course){
        return course.course== "Starters"
        

    })

    let startesmemu = startersDishes.map (starterDish =>{
        let startesmemu = `<div>
        <h3>${starterDish.title}</h3>
        <h3>${starterDish.description}</h3>
        <h3>${starterDish.price}</h3>
        <img src='${starterDish.imageURL}'></img>
        </div>`

        return startesmemu
    })
    menuOption.innerHTML = startesmemu.join('')

    
  
})

/*the entree menu page */
entrees.addEventListener('click', function(){
    let EntreeDishes = dishes.filter(function(course){
        return course.course=="Entrees"
    })
let EntreeMenu = EntreeDishes.map(entreeDish =>{

    let EntreeMenu = `<div>
    <h3>${entreeDish .title}</h3>
        <h3>${entreeDish .description}</h3>
        <h3>${entreeDish .price}</h3>
        <img src='${entreeDish .imageURL}'></img>
    </div>`
    return EntreeMenu
     
})
menuOption.innerHTML = EntreeMenu.join('')
})

/* the dessert menu page */

dessert.addEventListener('click', function(){
    let dessertDishes = dishes.filter(function(course){
        return course.course=="dessert"
    })
    let dessertMenu = dessertDishes.map(dessertDishes =>{
        let dessertMenu = `<div>

        <h3>${dessertDishes.title}</h3>
        <h3>${dessertDishes.description}</h3>
        <h3>${dessertDishes.price}</h3>
        <img src='${dessertDishes.imageURL}'></img>

        </div>`
        return dessertMenu
    })
    menuOption.innerHTML = dessertMenu.join('')
})
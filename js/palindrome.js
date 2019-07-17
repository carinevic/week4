

/*
function add(a, b){
   let  result = a+b
   return result
}
 let result= add(8,5)
 console.log(result)

function greet( firstName, lastName){
    return firstName + " ," + lastName

}
let name = greet("John", "Doe")
console.log(name)

*/

 let word = "carine"
 let reverseWord = " "
 for(let index = word.length-1; index>= 0; index --){
     reverseWord +=word [index]
     console.log(reverseWord)
 }


 
 
 for (var i = 0; i < 100; i++)
 {
     // check that the number is even
     if (i % 2 == 0)
     {
          continue;
     }
     // if we got here, then i is odd.
     console.log(i + " is an odd number.");
 }
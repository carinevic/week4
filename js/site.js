let num1 = 34
let num2 = 56

function compute(a,b){
    let result = a+b

    if(result >= 50 && result <= 80){
        return 65
    }else {
        return 80
    }
}
let result=compute (num1 ,num2)
console.log(result)

let p = 0
let tax = 0
let finalPrice = 0
const finalresult = document.getElementById("result")
const result2 = document.getElementById("result2")
function upDatePrice(number){
    p += number 
    console.log(p)
    tax = p * 0.1
    finalPrice = tax + p

    finalresult.innerHTML = "Price : " + p
    result2.innerHTML = " Price After taxes : "  + finalPrice
    
}
// Slicing 
let arr=[1,2,3,4,5,6]
console.log(arr.slice(2,5)) 

//Destructuring
let fruits=['Apple','Banana','Orange','Mango']

let [first,second,third,fourth]=fruits;
console.log(fruits[1])

const colors=['pink','orange']
const[primary,tert,secondary='red']=colors
console.log(primary,secondary,tert)

//forEach

let arr2=[2,4,6,8]
arr2.forEach((item,index)=>{
    console.log(item *2)
})

// Map

let num=[1,2,3,4,5,6,7,8,9,10]
let even=num.map((item)=>{
    return item * 2
})
console.log(even)

// Filter 

let num2=num.filter((item)=>{
    return item *3
})
console.log(num2)
//sorting 


let number= [34,54,12,10]
number.sort((a,b)=>{
    return a-b
})
console.log("sorted array")
console.log(number)

localStorage.setItem('name','shakil')
localStorage.setItem('drink','coffee')
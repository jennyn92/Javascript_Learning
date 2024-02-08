//functions

//By using HTML file and adding javascript inside script tags 
//I can use liveserver to use prompts and see the output on the inspect console

function getSum(num1,nume2){
    return num1+nume2
  }
  
  const ans =getSum(2,4)
  console.log(ans)
  

// Arrays
//Storing multiple elements
//arrays syntax
console.clear()

//as variable
const fruit1 = "apple"

//as array
const fruit = ["apple", "plum", "cherry"]

//[indexing, or picking a particular item]
console.log(fruit[0])


//Defining and using objects


//key:value pairs make up objects
//title:"Invisible Women"
const invisibleWomen = {
    title: "Invisible Women",
    subtitle: "Exposing gender bias women face everyday",
    author: "Caroline Criado-Perez",
    Publication_year: {
        year:2019,
        month: "June",
        day: 12,
}

console.log(invisibleWomen)

//key title
console.log(invisibleWomen.title)
//logs Invisible Women

console.log(invisibleWomen.Publication_year)


//Defining and using objects


//key:value pairs make up objects
//title:"Invisible Women"
const invisibleWomen = {
    title: "Invisible Women",
    subtitle: "Exposing gender bias women face everyday",
    author: {
        author1: "Caroline Criado-Perez",
        author2: "Jenny Nelson",
    },//nested object
    Publication_year: {
        year:2019,
        month: "June",
        day: 12,
    }
}


console.log(invisibleWomen)

//key title
console.log(invisibleWomen.title)
//logs title value, use .key to select

console.log(invisibleWomen.Publication_year.day)
//prints value of nested key


//Loop
//for loops

//assigned a task to log the numbers 0-10

// for (let.initializer;condition;modifier){
    //console.log(variable)
//}
//need to use let keyword so number can be updated

//modifiers ++ means(+1) -- means(-1)
//initializer = initializer + 1

// for (let startingnumber=1; startingnumber<=10; startingnumber++){
//     console.log(startingnumber)
// }


//assigned task to give 10 to 0
console.clear()

// for (let backwardsnum=10; backwardsnum>=0; backwardsnum--){
//     console.log(backwardsnum)
// }

const fruit = ["apple", "plum", "cherry"]

for (let startingfruit=0;startingfruit<=2;startingfruit++){
    console.log(fruit[startingfruit])
}
//change modification to print different parts of array in loop

//while loops

let countdown =3;

while(0<countdown){
    console.log(countdown)
    countdown -- //make sure to always change loop variable inside of loop, otherwise infinite
}

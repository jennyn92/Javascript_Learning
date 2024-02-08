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

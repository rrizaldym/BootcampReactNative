console.log(`1. Mengubah fungsi menjadi fungsi arrow`)
const golden = goldenFunction=()=>{
    console.log("this is golden!!")
}

golden()
console.log(`\n2. Sederhanakan menjadi Object literal di ES6`)
const newFunction = (firstName, lastName)=>{
    return {
      fullName: ()=>console.log(`${firstName} ${lastName}`)
    }
}
   
//Driver Code 
newFunction("William", "Imoh").fullName() 
console.log(`\n3. Destructuring`)
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const{firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)
console.log(`\n4. Array Spreading`)
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west,...east]

//Driver Code
console.log(combined)
console.log(`\n5. Template Literals`)
const planet = "earth"
const view = "glass"
var before = `Lorem ${view}dolor sit amet,   
    consectetur adipiscing elit,${planet}do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam`
 
// Driver Code
console.log(before) 
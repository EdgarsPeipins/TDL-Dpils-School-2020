
//Functions

function greet(){
    console.log('Hello there!');
}
//greet();
//greet();
//greet();


const speak = function(name = 'Maris', surname = "Karpov"){
    console.log(`Hello ${name} ${surname}`);
};
speak();

const calculateArean = function(radius){
    var area = 3.14 * radius**2;
    return area;
}



const myCircle = calculateArean(5);
console.log(myCircle);

const arrowCalculateArea = radius => 3.14 * radius**2;

    console.log(`Area is ${arrowCalculateArea(10)}`);



const bill = function(product, tax){
    var total = 0
    for (var i = 0; i< product.length; i++){
        total += product[i] + product[i] * tax;
    }
    return total;
}


//forEach

var people = ['Max', 'Deniss', 'Alex', 'Ivan']
//for (var i=0; i < people.length; i++);{
 //   console.log(people[i]);
//}

people.forEach(person => {
    console.log(person);
});


//Task
// function - sortArea(array)
// Ex. var arrrey = [89, 46, 0 35]
// sortArrrey(array)
//[0, 35, 46, 89]




// function sortArea(array){
//     //var result = [89, 46, 0, 35];
//for(i = 0; i < array.length; i++){
    // for(n = 0; i < array.lenght)
//}



    
//     for(i=0; i<array.length; i++){
    
//     for(j=0; j<array.length; j++){
//             if(array[i]>array[j+1]){
    
//             }
//         }
    
//      }
    
//      console.log(sortArea);
//     }
    




    var numArray = [89, 46, 0, 35];
     for (var i = 0; i < numArray.length; i++) { 
             var target = numArray[i];     
             for (var l = i - 1; l >= 0 && (numArray[l] > target); l--) 
             {         numArray[l+1] = numArray[l];
                 }     numArray[l+1] = target; } 
                 console.log(numArray);

                 //add comment


//Objects

let user = {
    name: 'Deniss',
    age: 30,
    email: 'deniss@gmail.com',
    location: 'Latvia',
    blogs: ['Whe 2020 is the best year', 'Why burgers is good'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('The user logged out')
    },
    logBlogs: function(){ 
        //Whe 2020 is the best year
        //Why burgers is good
        console.log(this.blogs);t
    }
};

console.log(user.login());
console.log(user.logout());

//Task
//Create Objects Car - 3 properties, 2 methods
//Log one property and one method

let cars = {
    colour: 'Red',
    doors: '4 doors',
    fuel: 'Diesel',
    insurance: function(){
        console.log('Insurance included');
    },
    age: function(){
        console.log('Car is new')
    }
};

console.log(cars.colour);
console.log(cars.insurance());



//Math objects

console.log(Math);
console.log(Math.PI);

const number = 7.8
console.log(Math.round(number)); // celoe cislo
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number)); // delete everything after .


//Random number
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));

let array = [{name: 'Edgars', age: 27}, {name: 'Max', age: 27}]
console.log(array[0].name);



//Create a function that accepts array with objects and 
//return the max possibility you get (sun of all score)

let numbers =[ 
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];
function count(score){
    let i,sum =0;
    for(i = 0; i < score.length; i++){
        sum += score[i].score;
    }
    console.log(sum);
}
console.log(count(numbers));



//Primitive Type vs Reference Type
//Primitive types
//Numbers, strings, booleans, ...

//reference types
//all types of objects, arrays, functions

//primitive type
let scoreOne = 50;
let scoreTwo = scoreOne;

scoreOne = 100
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

//reference type
let userOne = {name: 'Denis', age:30};
let userTwo = userOne;
console.log(userOne, userTwo);
userTwo.age = 40;
console.log(userOne,userTwo);


//Function toArray
//Accepts objects
//Returns Array
//Object - {a: 1, b: 1}
// returns [[ "a", 1], ["b", 2]]
//add code to file toArrrey.js
// push to Github

let object = {a: 1, b: 1};
function toArrow(object){

}





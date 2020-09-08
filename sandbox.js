
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
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('The user logged out')
    }
};

console.log(user.login());
console.log(user['email']);

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










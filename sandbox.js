
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

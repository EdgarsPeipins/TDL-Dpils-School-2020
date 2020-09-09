const toArray = {a:1 , b:1};
let toArray2 = function(){
        console.log(Object.value(toArray));
}

const test = Object.keys(toArray);
const test2 = Object.values(toArray);
const test3 = test[0]+ ' ' + test[2];
console.log(test3)
const entries = Object.entries(toArray);
console.log(entries)



var obj = {a:1, b:2};
for (var prop in obj) {
      console.log('[' + prop + " = " + obj[prop] + ']');
}

//add
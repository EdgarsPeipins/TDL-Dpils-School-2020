//console.log('Hello, note');

//Global object


// const interval = setInterval(() => {
//     console.log('in the interval');
// }, 2000);

// setTimeout(() =>{
//          console.log('time outed');
//          clearInterval(interval)
//      }, 5000);

//      console.log(' im out of syns');

//  console.log(_dirname);
//  console.log(_filename);
//  console.log(_dirname), _filename;
// =



// const humans = require('./people'); //take info from peopele.js
// console.log(humans.ages, humans.people);

// const names = require('./people');
// console.log(names.people, names.ages);

// const os = require('os');
// console.log(os);


// const fs = require('fs');
// //reading file 
// fs.readFile('./docs/blog1.txt', (err,data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// console.log('Read')


//write files
// const fs = require('fs');

// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('File written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('File written');
// });



// directories ----- create new folder
// const fs = require('fs');
// fs.mkdir('./assets', (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('folder created')
//     }
// });




//detele files
// const fs = require('fs');
// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('File deleted');
//         }
//     })
// }

//Cretate file note tmpPassword write , write some password
//if exist nad you try to create again
// delete it 


//  

//   fs.writeFile('./docs/tmpPassword.txt', 'Password', () => {
//       console.log('File written');
//  });


//  if (fs.existsSync('./docs/tmpPassword.txt')) {
//      fs.unlink('./docs/tmpPassword.txt', (error) => {
//          if(error) {
//              console.log(error);
//          } else {
//              'console.log('File deteled');
//          }
//      })
//  }




//STREAMS and Buffers

// const fs = require('fs');
// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

// readStream.on('data', (buffer) => {
//     console.log('-----New Chunk----');
//     console.log(buffer);
// })

// transfer info from blog 3 and write all text from blog3 to blog 4 
// const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (buffer) => {
//     //console.log('-----New Chunk----');
//     writeStream.write('\nNew cHUNK\n')
//     writeStream.write(buffer);
// })

module.exports = {
    sayhello(){
        return 'hello';
    },
    addNumbers(a, b){
        return a + b;
    }
}

//Add another function - addNumber.
//Accepts (calue1, value2);
//return value1=value2
//Write a test to check if you pass 2 and 4
//Function returns 6


 








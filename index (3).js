
const _= require("lodash");
/*
const array1 = [1,2,3,4,9];
const array2 = [2,4,5,6,7];

const diff = _.difference(array1,array2);
const diff2 = _.difference(array2,array1);
console.log(diff,diff2);
*/

//console.log('Hello, Word')
/*
for(let i = 0;i <= 10;i++) {
  console.log(i)
}
*/
/*
function retornarQuadrado(number) {
   return number * number
}

console.log(retornarQuadrado(5))
*/

/*
let array = [1,2,3,4,5,6]

function somaDosNumeros(arr) {
  let somar = 0;

  for(let i = 0;i < arr.length;i++) {
    somar = somar + arr[i]
  }
  return somar
}

console.log(somaDosNumeros(array))
*/

const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!, sport');
});

server.listen(3000, () => {
    console.log('Serve running at http://localhost:3000/');
});

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
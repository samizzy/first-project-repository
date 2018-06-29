console.log('hello world for node.js !!! ');

var fs = require('fs');
var yargs = require('yargs');
var axios = require('axios');


console.log(axios);
//axios.get

var args = process.argv;

console.log(`args is ${args}`);


// fs.appendFileSync('greeting.txt','hey there my first write');

// var other = require('./other.js');

const _ = require('lodash');


// _.
// console.log(_.isEqualWith);

var arr=[1,2,3,4,5,6,7];

var value=5;
var newArr =arr.filter((someValue)=>{
    return someValue !== value;
});

console.log('filered ooutput is :');

console.log(newArr);

arr=arr.map((temp)=>{    return temp*2;});

console.log('mapped output is :');
console.log(arr);

console.log(newArr);
const axios= require('axios');

const yargs = require('yargs');

const request = require('request');

//const requestImpl = require('./requestImpl.js');
//requestImpl.prototype.get();
request.get('https://www.google.co.in/search?q=manga&rlz=1C1NDCM_enIN793IN793&oq=manga&aqs=chrome..69i57j69i60l3j35i39l2.1775j0j7&sourceid=chrome&ie=UTF-8').on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log('The headers are : '+JSON.stringify(response.toJSON()));

    // console.log(response.headers['content-type']) // 'image/png'
  });

const argv = yargs.options({
    name:{
        alias:'n',
        string:true,
        describe:'Enter username or name!',
        demand:true        
    }
}).argv;
var name =argv.name;
console.log(`length of name is : ${name.length}`);
console.log(argv.name);



// request.





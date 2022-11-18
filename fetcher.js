const arg = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const siteUrl = arg[0];
const localPath = arg[1];

request(siteUrl, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  fs.writeFile(localPath, body, (err) => {
    if(err) return console.log(err);
    console.log('file was saved');
  })
});



// console.log(arg);
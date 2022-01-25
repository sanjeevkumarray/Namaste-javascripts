//import * as fetch from "node-fetch"
import fetch from 'node-fetch';
//const fetch=require("node-fetch")
console.log("Started")
setTimeout(function cbt(){
	console.log("CB Timeout");
},5000);
let k=fetch("https://zenquotes.io/api/random").then(function cbf(){
	console.log("Data fetched",k)//it wis microqueud task
});
console.log("End")
// import fetch from 'node-fetch';

// const response = await fetch('https://github.com/');
// const body = await response.text();

// console.log(body);
const fetch=require("node-fetch")
console.log("Started")
setTimeout(function cbt(){
	console.log("CB Timeout");
},5000);
fetch("https://zenquotes.io/api/random").then(function cbf(){
	console.log("Data fetched")
});
console.log("End")
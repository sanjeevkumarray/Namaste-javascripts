console.log("start");
function cb(){
	console.log("callback");
}cb();
setTimeout(function cb(){
	console.log("callback set timer zero")
},0);
console.log("eNd")
//what is callback function in js
setTimeout(function(){
	console.log("timer")
},5000);
function x(y){
	console.log("x");
	y();//jo y aaya ushko ab run karrha hai .
}
x(function y(){//x ke ander y passed ho rah ahai
	console.log("y")
});
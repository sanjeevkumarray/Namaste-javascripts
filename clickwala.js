//unsafe and global way
// let count=0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){
// 	console.log("Button Clicked",++count)
// })

//closer and safe way
function attcheventwala(){
	let count=0;//function xyz is forming closur with let
	document.getElementById("clickme").addEventListener("click",function xyz(){
		console.log("button closed",++count)
	})
}
attcheventwala();
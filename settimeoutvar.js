//In this code we will work closely with var and closur
//closer=>a function to to its outer environment and refernce together form a closer.
function x(){
	for(var i=1;i<=10;++i){
		close=((newi)=>{
			setTimeout(function(){
				console.log(newi)
			},newi*1000)//mini-second

		})
		close(i) //we created a new function so closer it will take new value from for loop and pass that new vale to it and its closur.
		
	}
	console.log("Namaste java script")
}
x();
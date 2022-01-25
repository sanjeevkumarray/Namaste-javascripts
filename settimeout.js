function x(){
	for(let i=1;i<=10;++i){ //here if we have used var it would have create a mess bcz of closure and var is a block scope thing so it would have just owerwrite its value..
		setTimeout(function(){
			console.log(i)
		},i*1000)
	}
	console.log("Namaste java script")
}
x();
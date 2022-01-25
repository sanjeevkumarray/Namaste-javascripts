// a()
// b();
//Function statement
function a(){
	console.log("a is called")
}
a()
//fuction expression
var b=function b(){//Here b is not created as a outer scope that's why hoisting for b is diff from a.Rather  it is created a local variable
	console.log("b is called")
}
b()
//Diff
//The diff btw these two is hoisting like for example:-
//calling function a before decleration will work but b will treat it is not defined .
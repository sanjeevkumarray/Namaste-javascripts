const arr=[5,1,3,2,6]
//filter odd values
function isOdd(x){
	return x%2;//if return 0=false and 1=true
}
const output=arr.filter(isOdd)
console.log(output);
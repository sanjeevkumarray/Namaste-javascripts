const arr = [5, 1, 3, 2, 6];
//sum
//arrow function
// let sum=(arr)=> {
//   let s = 0;
//   for (let i = 0; i < arr.length; i++) {
//     s= s + arr[i];
//   }
//   return s;
// }
function sum(arr) {
	let s = 0;
	for (let i = 0; i < arr.length; i++) {
	  s= s + arr[i];
	}
	return s;
      }
console.log(sum(arr));
const output=arr.reduce(function(acc,curr){
	acc=acc+curr;
	return acc;
},0);
console.log(output)

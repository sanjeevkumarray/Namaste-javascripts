const arr=[5,1,3,2,6]
//Double-[10,2,6,4,10]
//Triple-[15,3,9,6,10]
//binary-["101","1","11","10","110"]
function Double(x){
	return 2*x;
}
const output=arr.map(Double)
console.log(output)
//otherWay

// const arr=[5,1,3,2,6]
// const output=arr.map((double)=>{//here itss as anonyamous fnction
// 	return 2*double;
// })
// console.log(output)

//MDN 
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]
//Class Notes 5-29-21

// Function has three components:
// 1: Parameters

function add(a,b){
	return(a + b);
}

const sum = add(3,2);

console.log(`sum = ${sum}`);


function print();

//add a callback
function addWithCallback(a,b,f){
		console.log(a+b);
		//reference to another function
		f();
}

//add(3,2);
//print();
addWithCallback(3,2,print);

//anonymous function

addWithCallback(3,2,function(){
	console.log("print function");
});

var f = function (){
	console.log("I am anonymous");
}

f();
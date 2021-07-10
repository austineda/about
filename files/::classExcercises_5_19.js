//classExcercises_5_19

// 3 more, one to add, subtract, multiply, -- output of those individual
// funcitons wil be printed by shared function with callback

//share function receives paarmaetes, so add 2

function share(x) {
	console.log("Value = ", x);
	f();
}

function add(d, g){
	return (d + g);
}

function subtract(d, g){
	return(d - g);
}

function multiply(d, g){
	return(d * g);
}

share(add(1, 2));

share(subtract(3, 2));

share(multiply(3,2));

function addWShare(f);
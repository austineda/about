//functions: snippets of code that are meant to be resued

//Why do we need functions?

//Function signature is the combination of the name and paramenters of that function
//1. Name it
//function meow()
//2.Provide paramenters, parameters are variables needed for the function to operate

// Scope any variable declared within a block (functions, loops, etc. ) only exist within that block
calcDiameter = function (radius){
   // return is the value that is given to the caller of the function
   if(typeof(radius) == 'number'){
        return radius * 2;
    } else {
        return 0;
    }
}

//let diameter = calcDiameter(15);
console.log(calcDiameter(10));

// Why do we need functions? They reduce the amount of code that needs to be wrtitten
//let win = false;
//console.log(typeof(diameter));
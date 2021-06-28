// Create an array holding numbers 1-10 and print all the odd numbers


//teacher soultion

let nums = [];
//populate the array using a loop
for(i = 0; i < 10; i++){
    nums[i] = i + 1;
}
console.log(nums);

for(i in nums){

    //Modulo: shorthand for divide by 2. If there is a remainder after the division it returns 1
    // If there is no remainder, (the number on the right divides eqaully to the number of the left) you get 0
    if(i%2 === 1){
        console.log(i);
    }
}

nums.pop(11)

console.log(nums.reverse());
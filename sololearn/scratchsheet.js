
// Ensure that each group has at least 5 people in it. If this is false, 
// write a program to output how many more volunteers are needed to make even 
//groups of 5.

/*

const numberVolunteers = 6;

addPeople = function main(numberVolunteers) {
        if (numberVolunteers%5 > 0){
            return (5 - (numberVolunteers%5));
        } else {
            return 0;
        }
  
    
}
console.log(addPeople(numberVolunteers)); 
*/

/* Entrance to the club is only permitted in pairs.
Take the number of customers in the club as input, and, if all of them
 have a pair, output to the console "Right", otherwise output "Wrong". 
*/
/*
function main() {
    var numberGuests = 93;
 //Longhand way of writing a function
 /*
 if (numberGuests%2 > 0) {
        console.log('Wrong')
    } else {
        console.log('Right')
    }
}
 */   
// numberGuests%2 > 0 ? console.log('Wrong') : console.log('Right')

/* const totalPrice = 2500;
function descuento(){
    if (totalPrice >= 5000) {
        return 50;
    } else if (totalPrice >= 3000) {
        return 30;
    } else if (totalPrice >= 1000) {
        return 10;
    } else {
        return 0;
    }
}
console.log(descuento(totalPrice) + '%') 
*/

/* The printer prints 20 pages per minute.
Write a program that will output to the console 
how many pages will be printed each minute over the 
course of 6 minutes. */
/*
for (i=1; i<=6; i++) {
    document.write(i * 20 + "<br />")
}
*/

/* 
A number's factorial is the product of all positive 
integers less than or equal to the number.
Write a program that takes a number as input and 
outputs its factorial to the console. */


/* function main(number) {
    var number = 3;
    var factorial = 1;
    for (var i=number - 1; i>=0; i--){
        return number ((i - factorial) * i)
        
    }
    console.log(number)
}

console.log(main) */



/* The while loop


Write a program-timer, that will take the count
of seconds as input and output to the console all the seconds until timer stops. */
/*
function main(){
var seconds = 6;
    while (seconds >= 0) {
        console.log(seconds);
        seconds--;
    }
}

*/
/*
var sum=0; 

for(i=4; i<9; i++) {

  if (i == 6) {

    continue; 

  }

  sum += i;

}

console.log(sum);
*/


/*The Snail in the Well


The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth? */

function main() {
    var depth = 31;

var climbedDistance = 0
var day = 0





    for (;climbedDistance<depth;day++){

        let climbedDistance = climbedDistance+7-2;
        console.log(climbedDistance);
    
   

    }
}

main()


function printPrimeNumbersLessThan100(){
    for(i = 0; i<=1000; i++){
        if(i%2 == 0){
        console.log("Not Prime ",i)
        } 
        else if(i%3 == 0){
        console.log("Not Prime ",i)
        } 
        else if(i%5 == 0){
        console.log("Not Prime ",i)
        } 
        
        else if(i%7 == 0){
        console.log("Not Prime ",i)
        } 
                
        else{
        console.log("Prime ",i)
        }
    }
}

printPrimeNumbersLessThan100();

// best solution: 
if(i%i == 0 && i%1 == 0 && i%(i-1)! == 0);
    return i
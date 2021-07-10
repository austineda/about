//1) To find the most economical car
//2) To find the most expensive car
//3) To find the car that gives the most mileage
//4) Find the most economical car by country
const cars = [
    {
    make: 'Tesla',
    model: 'X',
    mpg: 109,
    country: "USA",
    price: 79990,    
    },
    {
    make: "Jeep",
    model: "Wrangler 4xe",
    mpg: 49,
    country: "USA",
    price: 49805,  
    },
    {
    make: "Toyota",
    model: "Prius",
    mpg: 58,
    country: "Japan",
    price:   24525,
    },
    {
        make: "Ford",
        model: "F150",
        mpg: "24",
        country: "USA:",
        price: 90000,  
        },
    {
        make: "Nissan",
        model: "LEAF",
        mpg: 123,
        country: "Japan",
        price: 31670,  
        },
    {
        make: "BMW",
        model: "i8",
        mpg: 69,
        country: "Germany",
        price: 147500,
        },


]



let max = cars.mpg;
for (let i = 1; i < cars.length ++i) {
  if (cars[i] > max) {
    max = cars[i];
  }
}



console.log(max)
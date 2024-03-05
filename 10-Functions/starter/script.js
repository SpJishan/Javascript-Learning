'use strict';


/////////////////////////////////////////////////////////////////////////////////////////
//   803. Default Parameters
/////////////////////////////////////////////////////////////////////////////////////////

// const bookings = [];

// const createBooking = function(
//     flightNumber,
//     passenger=1, 
//     price=200*passenger //if we define a parameter then the function will have 2 parameters instead of 3
//     ){

//         const booking = { //A variable containing the parameters of the function will store data as array
//             flightNumber,
//             passenger,
//             price
//         };
//         console.log(booking);
//         bookings.push(booking); //Storing all the parameters in n array

// };

// createBooking('lh123',1);
// createBooking('lh123',2);
// createBooking('lh123',3);
// createBooking('lh123',4);
// createBooking('lh123',5);
// createBooking('lh123',undefined,1000); //The undefined parameter will store the initial value of that parameter.

// console.log(bookings);

/////////////////////////////////////////////////////////////////////////////////////////
//   804. Value vs Reference 
/////////////////////////////////////////////////////////////////////////////////////////

// const flight = 'LH123';
// const jishan = {
//     name: 'Shafinul Pasha Jishan',
//     passport: 7123,
// };

// const checkIn = function (flightNum, passenger){
//     passenger.name='MR. ' + passenger.name;
//     console.log(passenger.passport);
//     if(passenger.passport === 7123 ){
//         console.log(`Checked In`);
//     }else{
//         console.log(`Wrong Passport`);
//     }
// };

// checkIn(flight, jishan);
// console.log(flight);
// console.log(jishan);

// jishan.passport = 8123;
// checkIn(flight, jishan); //The passport value has changed , so the function is using jishan.passport as object reference but using or calling it's updated value than the reference value.So in JavaScript functions are called by its value not reference

/////////////////////////////////////////////////////////////////////////////////////////
//   806 Functions Accepting Callback Functions 
/////////////////////////////////////////////////////////////////////////////////////////
// "/ /g"-The "g" after the regular expression is an option or flag that performs a global search, looking in the whole string and returning all matches.
// const lowerCase = function(str){
//     return str.replace(/ /g, ' ').toLowerCase(); 
// };



// //Making the first word uppercase

// const upperCase = function(str) {
//     const [first, ...others] =str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher Order function

// const transformer = function(str, fn){
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);

//     console.log(`Transformed Function: ${fn.name}`);
// }

// transformer(`toDay is a beautiful day`, lowerCase);
// transformer(`toDay is a beautiful day`, upperCase);

// //Simple eventlistener 

// const HI5 = function(){
//     console.log('🖐');
// };

// document.body.addEventListener('click' , HI5); //This is an example of hgher order function.




/////////////////////////////////////////////////////////////////////////////////////////
//   806 Functions Accepting Callback Functions 
/////////////////////////////////////////////////////////////////////////////////////////

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeter = greet('As-Salamu-Alaykum');

// greeter('Jishan'); // Calling the callback function
// greeter('Rafi');
// greeter('Nafi');
// greeter('Sakil');

// greet('As-Salamu-Alaykum')('Shafinul'); // Another way to direct calling the main function

// //Converting to an arrow function

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr('As-Salamu-Alaykum')('Shafinul Pasha Jishan');


/////////////////////////////////////////////////////////////////////////////////////////
//   808 The call and apply Methods (this keyword)
/////////////////////////////////////////////////////////////////////////////////////////

//Creating an airlines object data
const AirBangla ={ 
    airline: 'Air Bangla',
    iataCode: 'Bangla',
    booking: [], // Empty array to store all the booking from book function
    book(flightNum, passengerName){
        console.log(`${passengerName} booked a seat on ${this.airline} flight:${this.iataCode}${flightNum}`);
    
        this.booking.push({filght: `${this.iataCode}${flightNum}`}); //Using this keyword
    },
    
};

// AirBangla.book(123, 'Shafinul Pasha Jishan');
// AirBangla.book(1234, 'Tushar Ahsan');

//Creating another two airlines object data

const AirAstra = {
    airline : 'Air Astra',
    iataCode : 'Bangladesh Airlines',
    booking:[],
};

const SkyAir = {
    airline : 'Sky Air',
    iataCode : 'Dubai Airlines',
    booking : [],
};

const books = AirBangla.book; // Storing an object's function to a variable
// // books(123, 'Shafinul Pasha Jishan');
// //But books(123, 'Shafinul Pasha Jishan'); will not work , because this keyword is not present in AirAstra and SkyAir so we have to use call() function then the new object name to access the this keyword inside the variable

// books.call(AirAstra, 123, 'Shafinul Pasha Jishan'); // we have to call the object to set this keyword by call method. So the call method will call the function books and set this keyword into AirAstra Object.
// books.call(SkyAir, 1234, "Tushar Ahsan");


// //Apply Method , will take a list of parameters with array
// const flightData = [583, "Shafinul"];
// books.apply(SkyAir, flightData);

// //Apply Method by Call() function & REST/Spread operator
// books.call(SkyAir, ...flightData);
// books.call(SkyAir, 586, 'Shafinul');

/////////////////////////////////////////////////////////////////////////////////////////
//   808 The bind Method (this keyword)
/////////////////////////////////////////////////////////////////////////////////////////

//The bind method automatically creates a new function with this keyword in the object that is bind. On Call / Apply method they have to call the function book and then set this keyword on the object in which the bind method creates a new function for that object.
const skyairDA = books.bind(SkyAir);
const airastraBA = books.bind(AirAstra);

skyairDA(234, "Shafinul");
//We can predefine a parameter
const newskyairDA= books.bind(SkyAir, 345);

newskyairDA("Shafinul Pasha");


//Bind method on Eventlistener 
AirBangla.planes = 300;
AirBangla.buyplane = function (){
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', AirBangla.buyplane.bind(AirBangla));
//What will bind method do if a function does not have this keyword
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
//here on script 206 the bind method used null. Because the addTax function does not have this keyword. So while writing the null does not refer to the first parameter instead it says there is no this keyword. so 0.23 is the parameter for 'rate'.
console.log(addVAT(100));
console.log(addVAT(23));

//Function calling another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
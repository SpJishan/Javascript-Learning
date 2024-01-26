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

const flight = 'LH123';
const jishan = {
    name: 'Shafinul Pasha Jishan',
    passport: 7123,
};

const checkIn = function (flightNum, passenger){
    passenger.name='MR. ' + passenger.name;
    console.log(passenger.passport);
    if(passenger.passport === 7123 ){
        console.log(`Checked In`);
    }else{
        console.log(`Wrong Passport`);
    }
};

checkIn(flight, jishan);
console.log(flight);
console.log(jishan);

jishan.passport = 8123;
checkIn(flight, jishan); //The passport value has changed , so the function is using jishan.passport as object reference but using or calling it's updated value than the reference value.So in JavaScript functions are called by its value not reference



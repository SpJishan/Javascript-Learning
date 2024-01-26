'use strict';


/////////////////////////////////////////////////////////////////////////////////////////
//   803. Default Parameters
/////////////////////////////////////////////////////////////////////////////////////////

const bookings = [];

const createBooking = function(
    flightNumber,
    passenger=1, 
    price=200*passenger //if we define a parameter then the function will have 2 parameters instead of 3
    ){

        const booking = { //A variable containing the parameters of the function will store data as array
            flightNumber,
            passenger,
            price
        };
        console.log(booking);
        bookings.push(booking); //Storing all the parameters in n array

};

createBooking('lh123',1);
createBooking('lh123',2);
createBooking('lh123',3);
createBooking('lh123',4);
createBooking('lh123',5);
createBooking('lh123',undefined,1000); //The undefined parameter will store the initial value of that parameter.

console.log(bookings);
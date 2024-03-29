'use strict';


/////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //////////////////////////////////////////////////////////////////////////////////////////////////
// // Simple Array Methods
// //////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE- Will cut the array and save in a new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE-will delete the element by mutating the array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE-will reverse the array also mutate it
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT-combined another array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN-will join the elements with a "-" interval
// console.log(letters.join(' - '));



//////////////////////////////////////////////////////////////////////////////
// Looping Arrays: forEach
//////////////////////////////////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) { //entries() method to access index and array value
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');
// //movements.forEach(function (mov) {
// movements.forEach(function (mov, i, arr) {  //We can do similar method for each loop{entries()} , but the function perameter will follow the array value, index then the array
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...

// //***The only problem with forEach method that we cannot use continue or break statement, in that case we need to use forOf loop */


//////////////////////////////////////////////////////////////////////////////
// forEach With Maps and Sets
//////////////////////////////////////////////////////////////////////////////


// Map- consist a key and a value
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set-doesn't have any key or index it's only have value
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP Data

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Shafinul Pasha',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////////////////////////////////////////////////////////////////////////////////////////
// BANKIST APP CodeBase -> Creating dynamic movements row to show deposits and withdrawals
/////////////////////////////////////////////////////////////////////////////////////////

const displayMovements = function(movements, sort = false){ //1. Line 179 Adding sort perameter to displayMovements

 
  containerMovements.innerHTML= '';

  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements; //2. sort() will change the movements array so we need a copy of movements array , in this case I would use Slice() . I would use a ternary operator to call upon sort or movements.

  movs.forEach(function(mov, i){  //3. Using const mov instead of movements

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = 
    `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} €</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

//////////////////////////////////////////////////////////////////////////////
// Bankist - Creating UserName -> will use toLowercase(),split()and join() method
//////////////////////////////////////////////////////////////////////////////


// const user = "Shafinul Pasha Jishan";
// const userName= user.toLowerCase().split(' ').map(name=>name[0]).join('');

// console.log(userName);

// const createUsername = function(user){
//   const userName= user.toLowerCase().split(' ').map(name=>name[0]).join('');
//   return userName;
// }

// console.log(createUsername("Shafinul Pasha Jishan"));

// const createUsername = function(user){
//   const userName= user.toLowerCase().split(' ').map(name=>name[0]).join('');
//   return userName;
// }

// console.log(createUsername("Shafinul Pasha Jishan"));


const createUsername = function(accs){
  accs.forEach(function(acc){
    acc.userName= acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  })
};

createUsername(accounts);
console.log(accounts);

//////////////////////////////////////////////////////////////////////////////
// Bankist - filter Method -> Deposits holds an array of positive value, vice versa for withdrawals
//////////////////////////////////////////////////////////////////////////////

const deposits= movements.filter(mov => mov > 0);

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0)

console.log(withdrawals);

//////////////////////////////////////////////////////////////////////////////
// Bankist - Reduce Method-> I would use it to calculate total available balance
//////////////////////////////////////////////////////////////////////////////

// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc+cur}, 0);
// console.log(balance);

// const balance = movements.reduce((acc, cur) => acc+cur, 0);
// console.log(balance);

const calcDisplayBalance = function(acc){  //4. Changing perticular displayBalance to targeted acc line 258
  acc.balance = acc.movements.reduce((acc, cur) => acc+cur, 0);
  labelBalance.textContent= `${acc.balance} €`;
}

// calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////////////////////////////////////////////
// Bankist - The Magic of Chaining method. In this part I will calculate and display the total in , out and interest balance.
////////////////////////////////////////////////////////////////////////////////////////


const calcDisplaySummary = function(acc){  //7. calcDisplaysummary changing the perameter (movement to acc to view individual interest) of the function
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc+mov , 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements.filter(mov => mov <0).reduce((acc,mov) => acc+mov, 0);
  labelSumOut.textContent= `${Math.abs(out)} €`

  const interest = acc.movements.filter(mov => mov>0).map((deposits => (deposits*acc.interestRate)/100)).filter((int, i, arr) => {
    // console.log(arr);
    return int >= 1;
  }).reduce((acc, int) => acc+int, 0);
  labelSumInterest.textContent= `${interest} €`
};

// calcDisplaySummary(account1.movements);


//MAX Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);


///////////////////////////////////////
// The find Method
//////////////////////////////////////
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


///////////////////////////////////////
// Implementing LogIN
//////////////////////////////////////

//8. Refactoring Code creating udpadteUI function
const updateUI = function(acc){
  //ii. Display Movements
  displayMovements(acc.movements);

  //iii. Display Balance
  calcDisplayBalance(acc);  //5. Updating calcDisplayBalance(currentAccount) to call on account obj instead movements array


  //iv. Display Summary
  calcDisplaySummary(acc);
}

//4. Declaring currentOwner variable outside of eventlistener
let currentAccount;

//1. Add evet listener to the login button

btnLogin.addEventListener('click', function(e){

  e.preventDefault();      //2. Prevent Default to stop resubmitting the form
  

  currentAccount= accounts.find(acc => acc.userName === inputLoginUsername.value);     //Line 160. 3.Using find method to match the username for login
  console.log(currentAccount); 

  if(currentAccount?.pin === Number(inputLoginPin.value) ){  //5. Adding optional chaining to check the pin number of an username
    console.log('login');
      //i. Display UI And Message
      labelWelcome.textContent=`Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;


      updateUI(currentAccount);

      // v. Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      // vi. Hiding the focus of cursor
      inputLoginPin.blur();
  }

  
});

///////////////////////////////////////
// Implementing Transfers
//////////////////////////////////////

btnTransfer.addEventListener('click' , function(e){
  e.preventDefault();                               //1. Event listener & preventdefault
  const amount = Number(inputTransferAmount.value); //2.  Checking number in amount
  const receiverAcc = accounts.find( acc => acc.userName === inputTransferTo.value);  //3. CheckingrecieverAcc username
  console.log(amount, receiverAcc);

  if(amount>0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.userName !== currentAccount.userName){ // 6. Implementing 4 checking if amount is greater 0 then is a valid recieverACC? and current acc balance is greater than the sending amount also reciever account username is not the current acc username
      // 7. Doing the transfer-> removing amount from current acc and adding amount to reciever acc
    currentAccount.movements.push(- amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);



  }
  inputTransferAmount.value = inputTransferTo.value = ''; //9. Clear input fields for transfer
});

///////////////////////////////////////
// Close Account - The findIndex Method
//////////////////////////////////////

// 1. event handler

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.userName && Number(inputClosePin.value)===currentAccount.pin){    // 2. checking user and pin
    const index = accounts.findIndex( acc => acc.userName === currentAccount.userName);
    console.log(index);
//4. Delete Account Using slice
    accounts.slice(index, 1);

  // 5. Hiding the UI

  containerApp.style.opacity=0;


  }
  inputClosePin.value= inputCloseUsername.value= ''; //6. Removing inputs 

});


///////////////////////////////////////
// Request Loan - The some & evry Method
//////////////////////////////////////

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount>0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){ //Using sme mehod to check an amount is eligible for loan

    //Adding movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  //clearing input fields
  inputLoanAmount.value = '';
});


///////////////////////////////////////
// Sorting Array- Bankist App
///////////////////////////////////////

let sorted = false;

btnSort.addEventListener('click', function(e){  // 4. Event handler for btnSort , 
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);  // 5. To use perameter sort i use a boolean variable sorted and use it by ! '
  sorted = !sorted;  // 6. Change the value also to use in multiple case
});



///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));



///////////////////////////////////////
// flat and flatMap
///////////////////////////////////////

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));  //1. Flat method can convert nested array to a single array , we can configure how many level array need to be flaten. In this case it is 2 level.

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)     // 2. FlatMap can perform a mapping operation then it will flaten the arrray 1 level only
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

///////////////////////////////////////
// Sorting Array
///////////////////////////////////////

//String
const owner = ['Shafinul', 'Jonas' , 'Nafi', 'Zubayed'];
console.log(owner.sort());
console.log(owner); // 2. After sorting it will mutate the original array

//Number
console.log(movements);
console.log(movements.sort()); // 1. sort() methods works on string but doesn't work on numbers

// 3. Ascending
// return<0 a<b (keeping the order)
// return>0 a>b (Switch order)

// movements.sort((a,b)=>{
// if(a>b) return 1;
// if(a<b) return -1;
// });

movements.sort((a,b)=> a-b);

console.log(`Ascending Order: ${movements}` );

//4.Descending
//return<0 a>b (keeping the order)
//return>0 a<b (Switch order)

// movements.sort((a,b)=>{
//   if(a<b) return 1;
//   if(a>b) return -1;
//   });

movements.sort((a,b)=> b-a);

console.log(`Descending Order: ${movements}` );

/////////////////////////////////////////////
// More Ways of Creating and Filling Arrays
/////////////////////////////////////////////


const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr2);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


//Collecting elements from event handler and constructing a new array of info
labelBalance.addEventListener('click', function (e) {
  e.preventDefault();
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});


///////////////////////////////////////
// Coding Challenge #1
//////////////////////////////////////
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

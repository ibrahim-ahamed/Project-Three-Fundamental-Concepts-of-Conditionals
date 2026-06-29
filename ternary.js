/**
 * TERNARY --> three parts
 */

const age = 15;
// normal if else
// if (age >= 18){
//     console.log('Tumi Vote Dite parba');
// }
// else{
//     console.log('Tumi Vote Dite parba na');
// };

// simple ternary
// age >= 18 ? console.log('Tumi Vote Dite Parba') : console.log('Tumi Vote Dite Parba Na');


let price = 500;
const isLeader = false;

// if (isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 1000;
// }
price = isLeader === true ? 0 : price + 100
console.log(price)

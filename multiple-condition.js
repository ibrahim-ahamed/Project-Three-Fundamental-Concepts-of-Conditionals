const salary = 25000;
const isBcs = true;
const height = 61;

// if (salary > 20000 && isBcs == true && height > 60) {
//     console.log('You are eligible for the job');
// } else {
//     console.log('You are not eligible for the job');
// }


if (salary > 20000 || isBcs == true || height > 66) {
    console.log('You are eligible for the job');
} else {
    console.log('You are not eligible for the job');
}

// ------------------COMPLEX CONDITION-----------

if ((salary > 20000 && isBcs == true) || height > 66) {
    console.log('You are eligible for the job');
} else {
    console.log('You are not eligible for the job');
}

if ((salary > 20000 || isBcs == true) && height > 66) {
    console.log('You are eligible for the job');
} else {
    console.log('You are not eligible for the job');
}
const age = 11;

if (age <= 12){
    // free
    console.log("You are eligible for free entry.");
}
else if (age >= 50 && age <= 60){
    // 25% discount
    const price = 1000
    const discount = price * 25 / 100;
    console.log("You are eligible for 25% discount. Your discount is:", discount);
}
else if (age >= 61){
    // 50% discount
    const price = 1000
    const discount = price * 50 / 100;
    console.log("You are eligible for 50% discount. Your discount is:", discount);
}
else{
    console.log("You are not eligible for discount");
}
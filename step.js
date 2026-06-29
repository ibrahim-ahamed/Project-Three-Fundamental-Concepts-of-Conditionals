/**
 * MULTI-LEVEL CONDITIONS
 */

const price = 3000;

if (price >= 5000){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log('Discount:', discount);
    console.log("Your Pay Amout Is:", payAmount)
}
else if (price >= 2500){
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log('Discount:', discount);
    console.log("Your Pay Amout Is:", payAmount)
}
else{
    console.log("You are not eligible for discount");
}
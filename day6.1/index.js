// let a, b, c, d, e, f, g, h;
// a = 6;
// b = 90;
// c = 45;
// d = 34;
// e = 55;
// f = 60;
// g = 40;
// h = 20;

// console.log('The sum of ' + a + ' and ' + b + ' is ' + (a + b));
// console.log('The sum of ' + c + ' and ' + d + ' is ' + (c + d));
// console.log('The sum of ' + e + ' and ' + f + ' is ' + (e + f));
// console.log('The sum of ' + g + ' and ' + h + ' is ' + (g + h));


// const add = (num1, num2) => {

//   console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + (num1 + num2));

// }

// add(200, 500);

let fruitData = [
  {
    name: "kiwi",
    scientificName: 'k-wrong-xyz',
    price: 100
  },
  {
    name: "mango",
    scientificName: 'k-wrong-xyz',
    price: 100
  },
  {
    name: "banana",
    scientificName: 'k-wrong-xyz',
    price: 100
  }
]

console.log(`the price of  ${fruitData[0].name}  is  ${fruitData[0].price}`);
console.log(`the price of  ${fruitData[1].name}  is  ${fruitData[1].price}`);
console.log(`the price of  ${fruitData[2].name}  is  ${fruitData[2].price}`);



const car={
name:'tesla',
model:65575
}

const {name,model}=car;
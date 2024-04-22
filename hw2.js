let batterConsistency; // undefined
const patelniaTemperature = 185; // number
var cookingTime = '1 Hours 37 minutes'; // string
let flipCount = '5 - 6 raziv'; // string
const ingredientList = {
  one: `milk`,
  two: `sugar`,
  three: `cacao`,
  four: `butter`,
  five: `flour`,
}; // object - я так розумію,що це ми будемо углублятись пізніше,но консоле ,коли не брати текст в дужки - видає помилку.коли просто цифру,чи цифри в дужках,то ні.
var batterVolume = `1.5L`; // string
const servingSize = !1.56; // boolean
let toppingChoice = ['apple', 'banana', 'orange', 'mango', 'kiwi']; // array
const remainingBatter = 0.4; // number
function patelniaOilLevel(a, b, c) {
  return a >= b <= c;
} // function
const result = patelniaOilLevel(0.1, 0.4, 0.9);
console.log(result);

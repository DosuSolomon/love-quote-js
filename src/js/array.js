const foods = [
  {
    name: "rice",
    price: 50000,
    market: "Bodija",
  },
  {
    name: "Spaghetti",
    price: 8000,
    market: "Mile 12",
  },
  {
    name: "Yam",
    price: 5000,
    market: "Mile 2",
  },
  {
    name: "Beans",
    price: 25000,
    market: "Bariga",
  },
  {
    name: "Platain",
    price: 5000,
    market: "Mile 12",
  },
];
console.log(foods);
// forEach
// foods.forEach((item)=>{
//   console.log(`The price of ${item.name} is ${item.price}`)
// })
//map method
const foodItem = foods.map((item) => {
  return `The price of ${item.name} is ${item.price} from ${item.market} market`;
});

const newPrice = foods.map((item)=>{
  return {name: item.name, price: item.price * 2}
})
console.log(newPrice)
// const [name, price, market] = foods
// console.log(`The price of ${foods[0].name} is ${foods[0].price * 2} `)

// filter
const samePrice = foods.filter((item)=>{
  return item.price === 5000 && item.market === "Mile 12"
})
console.log(samePrice)

const trackRobot = (N, E, S, W) => {
    let a = [0, 0];
    if (N === undefined) {
      N = 0;
    }
    if (E === undefined) {
      E = 0;
    }
    if (S === undefined) {
      S = 0;
    } 
    if (W === undefined) {
      W = 0;
    }
    a[1] = N - S;
    a[0] = E - W;
    return a;
  };
  
  console.log(trackRobot(20, 30, 10, 40));
  console.log(trackRobot());
  console.log(trackRobot(-10, 20, 10));







const coins = [500, 200, 100, 50, 20, 10];

function vendingMachine(products, money, productNumber) {
    if (productNumber == 0 || productNumber > products.length) 
        return "Enter a valid product number";
    if (money < products[productNumber-1].money)
        return "Not enough money for this product";
    money -= products[productNumber-1].money;
    let change = [];
    for (const coin of coins) {
        while (money >= coin) {
            money -= coin;
            change.push(coin);
        }
    }
    return {product: products[productNumber-1].name, change: change};
}

const snacks = [
    {name: "Crackers", money: 100},
    {name: "Skittles", money: 250},
    {name: "Twix", money: 200},
    {name: "Chips", money: 350}
];

console.log(vendingMachine(snacks, 400, 1));
console.log(vendingMachine(snacks, 200, 2));
console.log(vendingMachine(snacks, 1000, 4));
console.log(vendingMachine(snacks, 400, 5));
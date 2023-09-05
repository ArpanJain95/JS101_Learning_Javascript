// Products Cart Object
// - Given an input of products in the below format (Name Quantity Price)
// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let obj = {
  data: [],
  dataObj: function(name, quantity, price){
    for(let i=0; i<name.length; i++){
      this.data.push({name: name[i], quantity: quantity[i], price: price[i]})
    }
  },
  total: function(){
    let totalPrice = 0;
    for(let j=0; j<this.data.length; j++){
      totalPrice+=this.data[j].quantity*this.data[j].price;
    }
  return totalPrice;
  },
};

let names = ["Rice", "Dal", "Salt"];
let quantities = [2, 3, 1];
let prices = [60, 50, 20];
obj.dataObj(names, quantities, prices);

console.log(obj.total());
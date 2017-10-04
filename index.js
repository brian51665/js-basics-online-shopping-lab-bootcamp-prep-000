var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 101);
  var itemInfo = {[itemName] : itemPrice};
 cart.push(itemInfo);
 console.log( itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length === < 0) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

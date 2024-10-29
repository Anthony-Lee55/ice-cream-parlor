const iceCream = [
  { name: 'Vanilla', price: 3.00, quantity: 0, type: 'flavor' },
  { name: 'Chocolate', price: 4.00, quantity: 0, type: 'flavor' },
  { name: 'Strawberry', price: 5.00, quantity: 0, type: 'flavor' },
  { name: 'Waffle Cone', price: 3.00, quantity: 0, type: 'vessel' },
  { name: 'Waffle Bowl', price: 4.00, quantity: 0, type: 'vessel' },
  { name: 'Dipped Cone', price: 5.00, quantity: 0, type: 'vessel' },
  { name: 'Sprinkles', price: 1.00, quantity: 0, type: 'toppings' },
  { name: 'Chocolate Chips', price: 2.00, quantity: 0, type: 'toppings' },
  { name: 'Gummy Worms', price: 3.00, quantity: 0, type: 'toppings' },
]

function orderVanilla() {
  let vanilla = iceCream[0]
  vanilla.quantity += 1
  console.log('vanilla', vanilla)
}

function addItemByName(itemName) {
  console.log('this is the item name:', itemName);

  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i];
    if (item.name == itemName) {
      item.quantity += 1
    }
  }
  drawCart()
}

function calculateCartTotal() {
  let total = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i];
    total += item.quantity * item.price
  }
  console.log('this is the price:', total)
  return total
}

function payNow() {
  const cartTotal = calculateCartTotal()
  const confirmed = confirm('Save some for Me!')
  if (confirmed) {
    for (let i = 0; i < iceCream.length; index++) {
      let item = iceCream[i];
      item.quantity = 0
    }
    drawCart()
  }
}

function drawCart() {
  let content = ''
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i];
    if (item.quantity > 0) {
      content += `<p class="d-flex justify-content-between"><span>${item.quantity}x ${item.name}</span><span class="text-danger">$${item.price * item.quantity}</span></p>`
    }
  }
  console.log('content', content);
  const cartElm = document.getElementById('cart-display')
  cartElm.innerHTML = content
  drawTotal()
}

function drawTotal() {
  let cartTotal = calculateCartTotal()
  const totalElm = document.getElementById('cart-total')
  totalElm.innerText = cartTotal.toFixed(2)
}
// ITERATION 1

function updateSubtotal(product) {
  
  let priceElement = product.querySelector('.price span');
  console.log(priceElement);

  let price = Number(priceElement.innerText);
  console.log(price);

  let quantityElement = product.querySelector('.quantity input');
  console.log(quantityElement);

  let quantity = Number(quantityElement.value);
  let subtotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotal;
  return subtotalElement.innerText;
  
}

function calculateAll() {
 
  //return ALGO!//
  
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

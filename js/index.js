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
  return subtotal;
}

function calculateAll() {
 
/*const productsElements = document.querySelectorAll('.product'); // Esto hace referencia a la fila entera
let subtotal = updateSubtotal(productsElements[0]); // Llamamos a la función y le damos el valr de un solo elemento
let totalElement = document.querySelector('#total-value span');
totalElement.innerText = subtotal; // Escribimos dentro de la cajita para que el total sea igual al subtotal
*/

let sumatorio = 0;
const allItems = document.querySelectorAll('.product');

allItems.forEach((item) => {
  let subtotal = updateSubtotal(item);
  sumatorio += subtotal;
});

}



  


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

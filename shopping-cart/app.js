// Variables
const cart = document.querySelector('#cart');
const shoppingCart = document.querySelector('#shopping-cart tbody');
const listOfProducts = document.querySelector('#products');
const emptyCartBtn = document.querySelector('#empty-cart');


// Event listeners 
function loadEventListeners() {
    // adding a product when clicking on "add to cart"
    listOfProducts.addEventListener('click', addingProducts);
}

// Functions 
function addingProducts() {
    console.log('presionando en add to cart...testing')
}

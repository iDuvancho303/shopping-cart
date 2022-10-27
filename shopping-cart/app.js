// Variables
const cart = document.querySelector('#cart');
const shoppingCart = document.querySelector('#shopping-cart tbody');
const listOfProducts = document.querySelector('#products');
const emptyCartBtn = document.querySelector('#empty-cart');




loadEventListeners(); 
// Event listeners 
function loadEventListeners() {
    // adding a product when clicking on "add to cart"
    listOfProducts.addEventListener('click', addingProducts);
}

// Functions 
function addingProducts(e) {

    e.preventDefault(); 

    if(e.target.classList.contains('agregar-carrito')) {

        const selectedCourse = e.target.parentElement.parent.parentElement;
        courseData(selectedCourse);
    }
}


// Extract info about the course
const courseData() {

}
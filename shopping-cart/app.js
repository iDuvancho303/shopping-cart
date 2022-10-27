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

        const selectedCourse = e.target.parentElement.parentElement;
        courseData(selectedCourse);
    }
}


// Extract info about the course
function courseData(course) {

    console.log(course);
    

    // Creating an object with course info
    const info = {
        image: course.querySelector('img').src,
        name: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
    }

    console.log(info);

}
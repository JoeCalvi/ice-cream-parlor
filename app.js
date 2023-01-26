const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://images.unsplash.com/photo-1584448275442-37f6357a499e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 2
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

let cart = []



function drawStore() {

}

function drawCart() {

    let cartOrderElem = document.getElementById('cart-order')
    let template = ''

    cart.forEach(item => {
        template += `
        <span class="checkout-text">
                        <p id="cart-order">${cart.name}</p>
                    </span>
        `
    })

    cartOrderElem.innerHTML = template

}

function addContainerToCart(name) {

    let chosenContainer = containers.find(container => container.name == name)
    cart.push({
        name: chosenContainer.name,
        price: chosenContainer.price
    })
    console.log(cart)
    drawCart()

}

function addFlavorToCart(name) {

    let chosenFlavor = iceCream.find(flavor => flavor.name == name)
    // console.log(chosenFlavor)
    cart.push({
        name: chosenFlavor.name,
        price: chosenFlavor.price
    })

    console.log(cart)

    drawCart()

}

function addToppingToCart(name) {

    let chosenTopping = toppings.find(topping => topping.name == name)
    // // console.log(chosenTopping)
    cart.push({
        name: chosenTopping.name,
        price: chosenTopping.price
    })

    console.log(cart)

    drawCart()

}

function removeItemFromCart() {

}

function adjustQuantity() {

}

function calculateCartTotal() {

}

function checkout() {
    cart = []
    drawCart()
    console.log(cart)
}


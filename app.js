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



// function drawStore() {
    // do i actually need to do this in this scenario?
// }

function drawCart() {

    let cartOrderElem = document.getElementById('cart-order')
    let cartTotalElem = document.getElementById('cart-total')
    let template = ''

    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        template += `
        <span class="checkout-text">
                        <p id="cart-order">${product.name}</p>
                    </span>
        `
    }

    let total = calculateCartTotal()

    cartOrderElem.innerHTML = template
    cartTotalElem.innerText = total.toFixed(2)

}

function addContainerToCart(name) {

    let chosenContainer = containers.find(container => container.name == name)
    cart.push({
        name: chosenContainer.name,
        price: chosenContainer.price,
        quantity: 1
    })
    console.log(cart)
    drawCart()

}

function addFlavorToCart(name) {

    let chosenFlavor = iceCream.find(flavor => flavor.name == name)

    cart.push({
        name: chosenFlavor.name,
        price: chosenFlavor.price,
        quantity: 1
    })

    console.log(cart)

    drawCart()

}

function addToppingToCart(name) {

    let chosenTopping = toppings.find(topping => topping.name == name)
    // // console.log(chosenTopping)
    cart.push({
        name: chosenTopping.name,
        price: chosenTopping.price,
        quantity: 1
    })

    console.log(cart)

    drawCart()

}

function checkout() {
    cart = []
    drawCart()
    console.log(cart)
}

function removeItemFromCart() {

    
    
}

function calculateCartTotal() {

    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price * item.quantity
    }

    return total
}



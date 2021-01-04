//------------------------- Object property shorthand----------------------

// usual object 
const userName = 'Saranya'
const userAge = 28

const user = {
    userName, // short method for the grabbing value
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring - extract object properties and it's value into individual

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// syntax of object destructuring
// const { label: productLabel, stock, rating = 5 } = product // we can rename the property as using : colon
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
transaction('order', product)
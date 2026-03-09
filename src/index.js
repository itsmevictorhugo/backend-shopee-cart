import * as cartService from './services/cart.js'
import createItem from './services/item.js';

const myCart = [];
const myWishList = [];

console.log('Welcome to the your Shopee Cart!');

const item1 = await createItem('HotWheels Ferrari', 20.99, 1)
const item2 = await createItem('HotWheels Lamborghini', 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWishList, item2)

console.log('Total Shopee cart: ');
await cartService.calculateTotal(myCart);
import * as cartService from './services/cart.js'
import createItem from './services/item.js';

const myCart = [];
// const myWishList = [];

console.log('Welcome to the your Shopee Cart!');

const item1 = await createItem('HotWheels Ferrari', 20.99, 1)
const item2 = await createItem('HotWheels Lamborghini', 39.99, 3) 

// Adiciono 2 itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
// await cartService.addItem(myWishList, item2)

await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart);

// Deletei 2 itens no carrinho
// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)
await cartService.calculateTotal(myCart);
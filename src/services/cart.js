// quais ações meu carrinho pode fazer

// Casos de uso:
// -> Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> Calcular o total
async function calculateTotal(userCart) {
  console.log('\nTotal Shopee cart: ');
  const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
  console.log(`🎁 Total:${result}`);
}

// -> Deletar item do carrinho
async function deleteItem(userCart, nameItem) {
  const index = userCart.findIndex((item) => item.name === nameItem)
  if(index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> Remover um item - diminui um item
async function removeItem(userCart, index) {
  // transforma o índice visual do usuário, para o índice do backend
  const deleteIndex = index - 1;
  // maior que zero e se é menor que o tamanho do carrinho
  if(index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1)
  }
}

async function displayCart(userCart) {
  console.log('\nShopee cart list:');
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
  });

}

export {
  addItem, 
  calculateTotal, 
  deleteItem, 
  removeItem, 
  displayCart
}
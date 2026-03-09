// quais ações meu carrinho pode fazer

// Casos de uso:
// -> Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> Calcular o total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
  console.log(result);
}

// -> Deletar item do carrinho
async function deleteItem(userCart, nameItem) {}

// -> Remover um item - diminui um item
async function removeItem(userCart, index) {}


export {
  addItem, 
  calculateTotal, 
  deleteItem, 
  removeItem
}
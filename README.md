<div align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/ES%20Modules-enabled-blue?style=for-the-badge" />

# 🛒 Shopee Cart

**A shopping cart simulation built with pure Node.js, focused on code organization through N-Layer (Layered) Architecture.**

</div>

---

## 📌 About

This project simulates the core logic of a shopping cart — creating items, adding them to a cart, removing units, and calculating the total — entirely in Node.js, with no external dependencies.

The main focus is on **code structure and modularization**: each responsibility lives in its own module, following a layered separation between the entry point, cart operations, and item creation.

---

## 🏗 Architecture

The project is organized into two service layers, orchestrated by a single entry point:

```
src/
├── index.js              # Entry point — creates items, runs cart operations
└── services/
    ├── cart.js           # Cart operations: add, remove, delete, display, total
    └── item.js           # Item factory: creates objects with subtotal method
```

| File       | Responsibility                                                               |
| ---------- | ---------------------------------------------------------------------------- |
| `index.js` | Orchestrates the flow — instantiates items and calls cart services           |
| `cart.js`  | All cart logic: addItem, removeItem, deleteItem, displayCart, calculateTotal |
| `item.js`  | Creates item objects with `name`, `price`, `quantity`, and `subtotal()`      |

---

## ✨ Features

- ➕ Add items to the cart
- ➖ Remove one unit of an item (`removeItem`) — deletes it when quantity reaches zero
- 🗑 Delete an item entirely from the cart by name (`deleteItem`)
- 🧾 Display all cart items with price, quantity, and subtotal
- 💰 Calculate the cart total

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher (required for top-level `await` and ES Modules)

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/itsmevictorhugo/backend-shopee-cart.git

# Navigate to the project
cd backend-shopee-cart

# Run
node src/index.js
```

### Expected output

```
Welcome to the your Shopee Cart!

Shopee cart list:
1. HotWheels Ferrari - R$20.99 | 1x | Subtotal 20.99
2. HotWheels Lamborghini - R$39.99 | 1x | Subtotal 119.97

Total Shopee cart:
🎁 Total:140.96
```

---

## 🧠 Concepts Demonstrated

- **N-Layer Architecture** — clear separation between orchestration, business logic, and data modeling
- **ES Modules** (`import`/`export`) — modern JavaScript module system
- **Factory function pattern** — `createItem()` returns objects with encapsulated behavior (`subtotal()`)
- **Array manipulation** — `push`, `splice`, `findIndex`, `reduce`, `forEach`
- **Async functions** — consistent use of `async/await` even for synchronous operations, establishing a scalable pattern

---

## 👨‍💻 Author

**Victor Hugo**  
Frontend Engineer · [GitHub](https://github.com/itsmevictorhugo) · [LinkedIn](https://linkedin.com/in/itsmevictorhugo)

import React, { useState } from 'react';
import './App.css';
import chocolateCake from './images/chocolate-cake.jpeg';
import blackforestCake from './images/black-forest-cake.jpeg';
import vanillaCake from './images/Cherried-Vanilla-Cake.jpg';
import pineappleCake from './images/pineapple-cake.jpeg';
import rasmalaiCake from './images/rasmalai-cake.jpg';
import strawberryCake from './images/strawberry-cake.jpg';
import redvelvetCake from './images/Red-velvet-cake.jpeg';
import fruitandnutCake from './images/Fruit-Nut-Cake.jpeg';
import ferrerorocherCake from './images/Ferrero-Rocher-Cake.jpeg';
import butterscotchCake from './images/Butterscotch-Cake.webp';


function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');

  const products = [
    { id: 1, name: 'Chocolate Cake', price: 400, rating: 4.9, image:chocolateCake , category: 'Classic Cakes' },
    { id: 2, name: 'Black Forest Cake', price: 350, rating: 4.4, image:blackforestCake, category: 'Classic Cakes' },
    { id: 3, name: 'Vanilla Cake', price: 450, rating: 4.4, image:vanillaCake , category: 'Specialty Cakes' },
    { id: 4, name: 'Pineapple Cake', price: 400, rating: 4.9, image:pineappleCake, category: 'Classic Cakes' },
    { id: 5, name: 'Rasmalai Cake', price: 550, rating: 4.6, image: rasmalaiCake, category: 'Specialty Cakes' },
    { id: 6, name: 'Strawberry Cake', price: 400, rating: 4.7, image: strawberryCake, category: 'Classic Cakes' },
    { id: 7, name: 'Red Velvet Cake', price: 500, rating: 4.5, image:redvelvetCake , category: 'Specialty Cakes' },
    { id: 8, name: 'Fruit and Nut Cake', price: 600, rating: 4.8, image:fruitandnutCake , category: 'Specialty Cakes' },
    { id: 9, name: 'Ferrero Rocher Cake', price: 700, rating: 4.3, image:ferrerorocherCake , category: 'Specialty Cakes' },
    { id: 10, name: 'Butterscotch Cake', price: 450, rating: 4.7, image:butterscotchCake , category: 'Classic Cakes' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterProducts = () => {
    if (category === 'All') {
      return products;
    } else {
      return products.filter(product => product.category === category);
    }
  };

  return (
    <div className="App">
      <header>
        <div className="navbar">
          <input type="search" placeholder="Search" id="search-bar" />
        </div>
        <div className="filter-options">
          <button onClick={() => setCategory('All')}>All</button>
          <button onClick={() => setCategory('Classic Cakes')}>Classic Cakes</button>
          <button onClick={() => setCategory('Specialty Cakes')}>Specialty Cakes</button>
        </div>
      </header>

      <main>
        <ProductList products={filterProducts()} addToCart={addToCart} />
        <ShoppingCart cart={cart} />
      </main>
    </div>
  );
}

function ProductList({ products, addToCart }) {
  return (
    <section className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <p>({product.rating})</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

function ShoppingCart({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <aside className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
      <div className="cart-summary">
        <p>Sub-Total</p>
        <p>${total.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </aside>
  );
}

export default App;
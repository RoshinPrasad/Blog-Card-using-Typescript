import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './ProductCard';


const Product = [
  {
    id: "1",
    image: "https://www.datocms-assets.com/60950/1645339548-product_default_icon.gif?fbclid=IwAR2bBdjyHg94qXFTxHJTLALTPZMUsOmJvcdDydLAGd-3tZcuwe7g0CglpKU",
    title: "Test Product",
    regularPrice: "100",
    salePrice: "80"
  },
  {
    id: "2",
    image: "https://www.datocms-assets.com/60950/1645339548-product_default_icon.gif?fbclid=IwAR2bBdjyHg94qXFTxHJTLALTPZMUsOmJvcdDydLAGd-3tZcuwe7g0CglpKU",
    title: "Test Product 2",
    regularPrice: "110",
    salePrice: "70"
  },
]

function App() {
  return (
    <div className="App">
      OhYeah Hello Guyz
      {
        Product.map(product => <ProductCard
          product={Product}
          key={product.id}
        ></ProductCard>)
      }
    </div>
  );
}

export default App;

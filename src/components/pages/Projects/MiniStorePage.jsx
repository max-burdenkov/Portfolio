import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'antd';
// import './MiniStorePage.scss';

const MiniStorePage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="mini-store-page fade-in">
      <h1 style={{ color: "#FFEBEE" }}>Mini Store</h1>
      <Row gutter={16} className="product-list" justify="center">
        {products.map((product) => (
          <Col style={{marginBottom: '1rem'}} xs={24} sm={12} md={8} lg={6} xl={8} span={8} key={product.id}>
            <Card title={product.name} extra={<span>${product.price}</span>}>
              <p>{product.name}</p>
              <Button onClick={() => addToCart(product)} type="primary">
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 style={{ color: "#FFEBEE" }}>Корзина товарів:</h2>
      <Row gutter={16} className="cart-list" justify="center">
        {cart.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={8} span={8} key={item.id}>
            <Card
              title={`${item.name} (x${item.quantity})`}
              extra={
                <Button onClick={() => removeFromCart(item.id)} danger>
                  Remove
                </Button>
              }
            >
              <p>${item.price * item.quantity}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default MiniStorePage;
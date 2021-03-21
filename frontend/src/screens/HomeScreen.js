import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = ({ product }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((theProduct) => (
          <Col key={theProduct._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={theProduct}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

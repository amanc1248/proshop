import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = ({ product }) => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((theProduct) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={theProduct}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

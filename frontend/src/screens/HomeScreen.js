import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions.js";
import Loader from "../components/Loader";
import Message from "../components/Message";
const HomeScreen = ({ product }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>
          <Loader></Loader>
        </h2>
      ) : error ? (
        <h2>
          <Message variant="danger">{error}</Message>
        </h2>
      ) : (
        <Row>
          {products.map((theProduct) => (
            <Col key={theProduct._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={theProduct}></Product>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

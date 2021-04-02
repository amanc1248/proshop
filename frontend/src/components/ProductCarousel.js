import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Messagae from "../components/Message";
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Messagae variant="danger">{error}</Messagae>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item className="carousel-item" key={product._id}>
          <Link to={`/product/${product.id}`}></Link>
          <Image src={product.image} alt={product.name} fluid></Image>
          <Carousel.Caption className="carousel-caption">
            <h2>
              {product.name}(${product.price})
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;

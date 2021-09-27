import React, {useState, useEffect} from 'react';
import axios from "axios";
//import Product from '../products';
import Rating from "../components/Rating";
import {Row, Col, ListGroup, Button, Image, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductDetails = ({match}) => {
    console.log(match);
    //const product = Product.find((p) => p.id === match.params.id);
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[match])
    return (
        <div>
            <Link to="/" className="btn btn-light"><i class="fas fa-arrow-left"></i> &nbsp;GO BACK</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroupItem>
                        <Row>
                            <Col>Status: </Col>
                            <Col>{product.countInStock > 0 ? 'In stock' : 'Out of stock'} </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className="btn-block" Type="Button">Add to cart</Button>
                    </ListGroupItem>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetails;
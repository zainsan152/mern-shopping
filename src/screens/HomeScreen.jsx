import React, {useState, useEffect} from 'react';
import axios from "axios";
//import Products from '../products';
import {Row, Col} from 'react-bootstrap';
import ProductScreen from "./ProductScreen";

const HomeScreen = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get("/api/products")
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <>
            <Row>
                {
                    Products.map(product => (
                        <Col key={product.id} md={3}>
                            <ProductScreen product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default HomeScreen;
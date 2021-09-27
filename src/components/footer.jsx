import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Col className="text-center">
                        <span>Copyright &copy; E-commerce MERN </span>
                    </Col>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
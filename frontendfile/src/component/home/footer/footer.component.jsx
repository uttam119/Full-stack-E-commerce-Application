import React from 'react';
import { Container, Row, Col, Nav, Navbar, CardFooter } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const FooterComponent = () => {
 
const imfooter = {
  position:"fixed",
  bottom: "0",
  width: "100%",
  zIndex:1 ,           
  backgroundColor: "#343a40" 
};

  
  return (
    <>
    {/* <footer className="bg-dark text-light py-4 " style={imfooter}>
      <Container fluid >
        <Row>
          <Col sm={12} md={4} lg={2} >
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce site for electronic products, smartphones, and computer products. Our mission is to provide the best quality products at competitive prices.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about" className="text-light">About Us</Nav.Link>
              <Nav.Link href="/contact" className="text-light">Contact Us</Nav.Link>
              <Nav.Link href="/faq" className="text-light">FAQ</Nav.Link>
              <Nav.Link href="/privacy-policy" className="text-light">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms-of-service" className="text-light">Terms of Service</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 E-commerce St, Tech City, TX 75001</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-around">
              <a href="https://facebook.com" className="text-light"><FaFacebook size={30} /></a>
              <a href="https://twitter.com" className="text-light"><FaTwitter size={30} /></a>
              <a href="https://instagram.com" className="text-light"><FaInstagram size={30} /></a>
              <a href="https://linkedin.com" className="text-light"><FaLinkedin size={30} /></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col >
            <p className="text-center">&copy; 2024 E-commerce. All rights reserved.</p>
          </Col>
         
        </Row>
      </Container>
      </footer> */}
   </>
  );
};

export default FooterComponent;

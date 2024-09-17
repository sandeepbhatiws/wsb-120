import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgs from '../assets/images/10001.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { IoLocationSharp } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

// import Nav from 'react-bootstrap/Nav';
export default function HeaderComponent() {
    return (
        <>

            
                <Container fluid className='p-0 m-0 bg-color-navbar position-sticky z-2 top-0'>
                <Container>
                <Navbar expand="lg" className="bg-color-navbar py-3   ">
                    <Navbar href="#home"><img src={imgs} alt="" className=' text-danger' /></Navbar>
                    <Navbar />
                    <Navbar >

                        <Nav className=" justify-content-between gap-3">
                            <Col md={5} className=' p-2'>
                                <Nav className='text-white d-flex '> <span className=''><IoLocationSharp />Deliver to Mumbai 400020</span></Nav>
                            </Col>

                            <Col xl={10} xs={10} sm={6}>
                                <Form>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className=" rounded-5  py-2  bg-pleace "
                                        aria-label="Search"
                                    />
                                </Form>
                            </Col>
                            <Col lg={4} className='d-lg-flex justify-content-end'>
                                <span className='fs-3 text-white align-items-center me-3 '>  <FaCartShopping /></span>
                                <span className=' fw-light text-white fs-5  '><i className='fs-3 p-0 m-0'>< IoMdContact /></i> </span>
                            </Col>
                        </Nav>
                    </Navbar>
                    </Navbar>
                    </Container>
                </Container>
            
            <Container fluid className=' bg-pleace '>
                <Container>
                    <Row className=' bg-pleace  d-none d-lg-flex jus'>     
                        <ListGroup horizontal className='bg-pleace  gap-md-4 gap-lg-4 text-white fw-semibold text-capitalize  '>
                        <ListGroup>Groceries</ListGroup>    
                            <ListGroup>Home&Lifestyle</ListGroup>
                            <ListGroup> Electronics</ListGroup>
                            <ListGroup> Fashinon</ListGroup>
                            <ListGroup>Industrial & professsinoal Supplies</ListGroup>
                            <ListGroup>Premium Fruites</ListGroup>
                            <ListGroup>Wellness</ListGroup>
                            <ListGroup>All Categories</ListGroup>   
                        </ListGroup>


                       
                    </Row>
                </Container>
            </Container>
            <Row className=' bg-light px-3 d-flex  justify-content-between d-lg-none d-block pt-1'>
                <Col><p><IoLocationSharp />location icon
                    Mumbai 400020</p></Col>

                <Col className=' d-flex justify-content-end'>
                    {/* <Headersmol></Headersmol> */}
                </Col>
            </Row>
          
        </>


    )
}

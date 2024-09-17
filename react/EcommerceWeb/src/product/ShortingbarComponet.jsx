import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa";

export default function ShortingbarComponet({ Shorting, SetShorting }) {
    let GETVAlue = (event) => {
        SetShorting(event.target.value)
    }
    return (
        <>
            <Container fluid className='m-0 p-0 shadow-sm  newbarthred'>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col>
                            <Nav defaultActiveKey="/home" as="ul" className='link-texty  fw-bold'>
                                <Nav.Item as="li" className='p-0 m-0'>
                                    <Nav.Link href="/home" className='mx-0'>Home</Nav.Link>
                                </Nav.Item>
                                <i className='mt-2  text-secondary'><FaChevronRight /></i>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-1">All Categories</Nav.Link>
                                </Nav.Item>
                                <i className='mt-2  text-secondary'><FaChevronRight /></i>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2">Fashion</Nav.Link>
                                </Nav.Item>
                                <i className='mt-2  text-secondary ms-0'><FaChevronRight /></i>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="link-2" className='text-secondary'>Men</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={3} className=' d-block  my-auto px-1 '>
                            <span className='outer-dropdown' >
                                <select name="cars" id="cars" className='p-1 px-3 rounded-3 dropdown' onChange={GETVAlue}>
                                    {/* <optgroup label="Swedish Cars " selected> */}
                                    {/* <option value="volvo" selected disabled className=' fw-bold'>Shart by:Popularity</option> */}
                                    <option value="1">A to Z</option>
                                    <option value="2">Z to A</option>
                                    <option value="3"> Low to  High</option>
                                    <option value="4">High To low</option>
                                    <option value="7">Rating :Low to High</option>
                                    <option value="8">Rating :High  to low </option>
                                    <option value="5">Discount: Low to High</option>
                                    <option value="6">Discount :High  to low </option>

                                </select></span>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

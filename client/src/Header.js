import React from 'react'
import {Navbar,Nav, Container, Offcanvas } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    const expand = "lg";
    return (
        <Navbar  bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="#action1"><Link to={"login"}>Home</Link></Nav.Link>
                <Nav.Link href="#action2"><Link to={"products"}>Products</Link></Nav.Link>
                <Nav.Link href="#action3"><Link to={"create"}>Create Product</Link></Nav.Link>
                <Nav.Link href="#action4"><Link to={"checkout"}>Checkout</Link></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}

export default Header

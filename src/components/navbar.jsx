import React, {useState , useEffect} from "react"
import larola from "../assets/larola.png"
import CartWidget from "./cartwidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router";



function NavBar () {
    const [Categorys, setCategorys] = useState ([]);
    useEffect (() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(cat => setCategorys(cat));
    },  []);

    const slicedCategorys = Categorys.slice(0,4)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" as={Nav.Link}> <img src={larola} id="logo-rola" alt="logo-rola" /></Navbar.Brand>
          <Nav className="me-auto">
            {slicedCategorys.map(cat=> <Nav.Link to={`/category/${cat}`} as={NavLink} key={cat}>{cat}</Nav.Link>)}
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar
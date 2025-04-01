import React, {useState , useEffect} from "react"
import larola from "../assets/larola.png"
import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router";
import styles from "../components/NavBar.module.css"



function NavBar () {
    const [Categorys, setCategorys] = useState ([]);
    useEffect (() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(cat => setCategorys(cat));
    },  []);

    const slicedCategorys = Categorys.slice(0,4)

    return (
        <Navbar className={styles.Navbar}>
        <Container>
          <Navbar.Brand href="/" as={Nav.Link}> <img src={larola} className={styles.larola} alt="logo-rola" /></Navbar.Brand>
          <Nav className={styles.links}>
            {slicedCategorys.map(cat=> <Nav.Link to={`/category/${cat}`} as={NavLink} key={cat}>{cat}</Nav.Link>)}
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar
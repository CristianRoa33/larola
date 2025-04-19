import React, {useState , useEffect} from "react"
import larola from "../../assets/larola.png"
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
import styles from "./NavBar.module.css"



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
                <Navbar.Brand link rel href="/"   as={Nav.Link}> <img src={larola} className={styles.larola} alt="logo-rola" /></Navbar.Brand>
                <Nav className={styles.links}>
                    {slicedCategorys.map(cat=> <Link  className={styles.link}to={`/category/${cat}`} as={Link} key={cat}>{cat}</Link>)}
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar
import larola from "../../assets/larola.png"
import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router";
import styles from "./NavBar.module.css"

    function NavBar () {
        return (
            <Navbar className={styles.Navbar}>
                <Container> 
                    <Link to= "/" as={Nav.Link}> <img src={larola} className={styles.larola} alt="logo-rola" /></Link>
                    <Nav className={styles.links}>
                        <Link to= "/Categoria/Camisetas" as={Nav.Link} className={styles.links}>Camisetas</Link>
                        <Link to= "/Categoria/Gorras" as={Nav.Link} className={styles.links}>Gorras</Link>
                        <Link to= "/Categoria/Pantalonetas" as={Nav.Link} className={styles.links}>Pantalonetas</Link>
                        <Link to= "/Categoria/Lociones" as={Nav.Link} className={styles.links}>Lociones</Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        )
    }

    

export default NavBar
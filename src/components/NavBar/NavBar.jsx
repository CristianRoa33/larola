import { useState } from "react"
import larola from "../../assets/larola.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router"
import styles from "./NavBar.module.css"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Camisetas", path: "/Categoria/Camisetas" },
    { name: "Gorras", path: "/Categoria/Gorras" },
    { name: "Pantalonetas", path: "/Categoria/Pantalonetas" },
    { name: "Lociones", path: "/Categoria/Lociones" },
  ]

  return (
    <nav className={styles.Navbar}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Link to="/" onClick={closeMenu}>
          <img src={larola} className={styles.larola} alt="logo-rola" />
        </Link>
      </div>

      {/* Navigation Links - Desktop */}
      <div className={styles.navLinksContainer}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={styles.links}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Cart Widget */}
      <div className={styles.cartWidgetContainer}>
        <CartWidget />
      </div>

      {/* Hamburger Button - Mobile */}
      <button
        className={`${styles.hamburgerButton} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={styles.mobileMenuLink}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
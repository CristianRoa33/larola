import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import styles from "./CartContainer.module.css";
import { useNavigate } from 'react-router';
import CartList from '../Cartlist/CartList';


function CartContainer () {
    const {cart , getTotal} = useContext(CartContext)
    const navigate = useNavigate()
    if (cart.length === 0) {
        return <h2 className= {styles.vacio}>Tu Carrito Está Vacío</h2>
    }
    return (    
        <div className={styles.cartContainer}>
            <CartList cart={cart}/>
            <h2 className={styles.total}>Total:${getTotal()}</h2>
            <button  className= {styles.Checkout} onClick={() => navigate('/checkout')}> Ir al Checkout </button> 
        </div>
    )
}

export default CartContainer
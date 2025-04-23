import CartItem from "../CartItem/CartItem"


function CartList ({cart}){
    return (
        <div>
            {cart.map((prod) => <CartItem key={prod.id} prod={prod}/>)}
        </div>
    )
    }
export default CartList



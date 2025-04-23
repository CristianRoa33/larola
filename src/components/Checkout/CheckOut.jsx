import { serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import { useNavigate} from 'react-router'
import { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createOrder } from "../../Firebase/Db"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import style from "./Checkout.module.css"

function Checkout() {
    const { cart ,clearcart} = useContext(CartContext)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form= e.target
        const email= form[0].value
        const nombre= form[1].value
        const telefono= form[2].value
        
        const order = {
            items: cart,
            user: { nombre, email, telefono },
            date: serverTimestamp(),
        }
    const id = await createOrder(order)
    
    if (id) {
        withReactContent(Swal).fire({
        title: `Gracias por su compra su orden es No.${id}`,
    })
    navigate("/")
    clearcart()
    }else {
        withReactContent(Swal).fire({
            title: 'Hubo un error',
        })
    }
}


return (
    <div className={style.checkout}>
      <h2 className={style.Titulo}>Formulario</h2>
      <Form className={style.form} onSubmit={handleSubmit}>
        <Form.Group className={style.group} controlId="email">
          <Form.Label className={style.label}>Email:</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ejemplo@gmail.com" 
            required 
            defaultValue='Ejemplo@gmail.com'
          />
        </Form.Group>

        <Form.Group className={style.group} controlId="name">
          <Form.Label className={style.label}>Nombre:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nombre + Apellido" 
            required 
            defaultValue='Nombre + Apellido'
          />
        </Form.Group>
        
        <Form.Group className={style.group} controlId="phone">
          <Form.Label className={style.label}>Telefono:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="+57 (301) 333-3333" 
            required
            defaultValue='+57 (301) 333-3333' 
          />
        </Form.Group>

        <Button 
          variant="success" 
          type='submit' 
          className={style.finalizar}
        >
          Finalizar
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
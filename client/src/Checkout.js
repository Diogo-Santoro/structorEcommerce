import React, { useReducer } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import myaxios from './myaxios'

const formReducer = (state, action) => {
    switch (action.type) {
        case 'ATUALIZA':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state;
    }
}


const Checkout = () => {

    const products = useSelector(state => state.checkoutProducts);

    const initialState = { name: "", email: "", password: "" }
    const [formState] = useReducer(formReducer, initialState);
    const dispatch = useDispatch()

    const SubmitForm = (e) => {
        let url = "http:/localhost:38000/checkeout"
        e.preventDefault();
        console.log(formState)

        const { email, password } = formState
        myaxios.post(url + "/clientes/login", { email, password }).then(r => {
            localStorage.setItem("token", r.data)
        })

        return (
            <div>
                <h1>Checkout</h1>
                {products.map((p, i) =>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p.productImage} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>
                                {p.description}
                            </Card.Text>
                            <Button variant="primary">{p.price}</Button>
                        </Card.Body>
                    </Card>
                )}
                <Button variant="primary" onClick={SubmitForm}>Finalizar Compra</Button>
            </div>
        )
    }
}

export default Checkout 

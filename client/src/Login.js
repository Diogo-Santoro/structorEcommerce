import React, { useState, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import myaxios from './myaxios'

import { Form, Button, Container } from 'react-bootstrap'

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

const Login = () => {
    const initialState = { name: "", email: "", password: "" }
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [file, setfile] = useState(initialState)


    const handleChange = (e) => {
        dispatch({
            type: 'ATUALIZA',
            name: e.target.name,
            value: e.target.value
        })
    }


    const RegisterSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = formState
        myaxios.post("/clients/register", { name, email, password }).then(r => {
            localStorage.setItem("token", r.data)
        })
        console.log({ name, email, password })
    }

    const LoginSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formState
        myaxios.post("/clients/login", { email, password }).then(r => {
            localStorage.setItem("token", r.data)
        })
        console.log({ email, password })
    }

    return (
        <div>
            <Form>
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text" onChange={handleChange}
                        className="form-control" name="name" id="name" aria-describedby="helpId" placeholder=""
                        value={formState.name} />
                    <small id="helpId" className="form-text text-muted">Adicione uma descrição</small>
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" onChange={handleChange}
                        className="form-control" name="email" id="email" aria-describedby="helpId" placeholder=""
                        value={formState.email} />
                    <small id="helpId" className="form-text text-muted">Defina o preço</small>
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" onChange={handleChange}
                        className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""
                        value={formState.password} />
                    <small id="helpId" className="form-text text-muted">Insira uma imagem</small>
                </div>

                <Button variant="primary" onClick={RegisterSubmit} type="submit">Register</Button> <br /><br />
                <Button variant="primary" onClick={LoginSubmit} type="submit">Login</Button>

            </Form>
        </div >
    )
}

export default Login

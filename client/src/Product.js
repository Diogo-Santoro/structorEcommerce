import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import myaxios from './myaxios';
import { addProduct } from './action'


const Product = (props) => {

    myaxios.get("/products")
    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(addProduct(product))
    }

    return (
        <div>
            <h1>Products</h1>
            {products.map((p, i) =>

                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={p.productImage} />
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                            {p.description}
                        </Card.Text>
                        <Button onClick={() => addProductToCart(p)} variant="primary">{p.price}</Button>
                    </Card.Body>
                </Card>
            )}

        </div>
    )
}

export default Product

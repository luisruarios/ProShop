import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { listProductDetails } from '../actions/productAction'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useNavigate } from "react-router-dom";
import { addToCart } from '../actions/cartActions'

const ProductScreen = () => {
    const history= useNavigate();
    const match = useParams()

    const productId = match.id

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, Number(qty)))
        }
    }, [dispatch, productId, qty])


    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.id))
    }, [dispatch, match])


    const addToCartHandler = () => {
        history(`/cart/`)
    }

    return (
        <>
            <Link className='btn btn-ligt my-3' to='/'>
                Go back
            </Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>

                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews}`} />
                            </ListGroup.Item>

                            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            <strong>${product.price}</strong></Col>
                                    </Row>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                {product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <FormControl
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) =>
                                                        setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}</option>
                                                        ))
                                                    }
                                                </FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )}
                                <ListGroupItem>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        type='button'>Add to cart</Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}

        </>
    )
}

export default ProductScreen
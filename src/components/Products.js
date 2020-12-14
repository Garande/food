// import { Card } from 'antd';
import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    id: 'product1',
                    name: 'Burger',
                    img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/6c/6f/d9/gemeos-ou-criado-pela.jpg',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Fish and Chips',
                    img: 'https://images.unsplash.com/photo-1580217593608-61931cefc821?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Peas',
                    img: 'https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Pizza',
                    img: 'https://images.unsplash.com/photo-1576458087875-4d52fc51e013?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Cake',
                    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=980&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Chicken',
                    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Juice',
                    img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Spagetti',
                    img: 'https://www.thespruceeats.com/thmb/oxzAQ4AIJu1fq8LA_lt1-ejoyNs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/meat-sauce-spaghetti-2500-56dc8ae53df78c5ba053531b.jpg',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Fries',
                    img: 'https://images.unsplash.com/photo-1584378868074-1ebfd5a636c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    price: '4000UGX',
                },
                {
                    id: 'product1',
                    name: 'Meat Balls',
                    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
                    price: '4000UGX',
                }
            ]
        }
    }

    render(){
        return (
            <Row>
                {this.state.products.map((product, key) => (
                    <Col xs key={`product_${key}`} className='mt-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.price}
                            </Card.Text>
                            <Button variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
                ))}
            </Row>
        )
    }
}

export default Products;
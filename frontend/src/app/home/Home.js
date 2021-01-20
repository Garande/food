import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CategoriesNav from '../../components/CategoriesNav';
import Products from '../../components/Products';
import ProductSlider from '../../components/ProductSlider';
import MainLayout from '../../layouts/Layout';

const Home = () => {
    return (
        <>
          <MainLayout>
            <Container>
              <Row noGutters style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Col md={3} style={{height: '400px'}}>
                  <Card
                  className="h-100 w-100"
                  style={{ backgroundColor: "white" }}
                >
                  <Card.Body className='p-0' >
                    <h3>Categories</h3>
                    <CategoriesNav />
                  </Card.Body>
                </Card>
                </Col>
                <Col md={9} >
                <ProductSlider />
                </Col>
                
              </Row>
    
              <Products />
              
            </Container>
          </MainLayout>
        </>
      );
}

export default Home;
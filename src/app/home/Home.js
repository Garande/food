import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from '../../components/Products';
import ProductSlider from '../../components/ProductSlider';
import MainLayout from '../../layouts/Layout';

const Home = () => {
    return (
        <>
          <MainLayout>
            <Container>
              <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ProductSlider />
              </Row>
    
              <Products />
              
            </Container>
          </MainLayout>
        </>
      );
}

export default Home;
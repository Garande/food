import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductSlider from "../../components/ProductSlider";
import ShoppingSlider from "../../components/ShoppingSlider";
import MainLayout from "../../layouts/Layout";

const Shopping = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Row>
            <Col className="pl-0" md={3} style={{ height: "400px" }}>
              <Card
                className="h-100"
                style={{ backgroundColor: "white" }}
              ></Card>
            </Col>
            <Col md={6} style={{ height: "400px" }}>
              <Row className='pb-2' style={{ height: '60%'}}>

              <ShoppingSlider />
                {/* <Card
                  className="h-100 w-100"
                  style={{ backgroundColor: "white" }}
                >
                    
                </Card> */}
              </Row>

              <Row className='pt-1' style={{ height: '40%'}}>
                <Card
                  className="h-100 w-100"
                  style={{ backgroundColor: "white" }}
                ></Card>
              </Row>
            </Col>
            <Col className="pr-0" md={3} style={{ height: "400px" }}>
              <Card
                className="h-100"
                style={{ backgroundColor: "white" }}
              ></Card>
            </Col>
          </Row>
        </Container>
      </MainLayout>
    </div>
  );
};

export default Shopping;

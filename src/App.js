import logo from './logo.svg';
import './App.css';
import MainLayout from './layout/Layout';
import { Container, Row } from 'react-bootstrap';
import Products from './components/Products';
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Container>
          <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ProductSlider />
          </Row>

          <Products />
          
        </Container>
      </MainLayout>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navbar variant="dark" bg="dark">
          <Navbar.Brand href="#">Barovian Activity Map</Navbar.Brand>
        </Navbar>
        <Row>
          <Col>
            <Image src="cos201.jpg" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

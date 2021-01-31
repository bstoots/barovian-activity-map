import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { MapContainer, ImageOverlay, Marker } from 'react-leaflet'
import { CRS } from 'leaflet';

function App() {

  const bounds = [[0, 0], [3225, 5025]];
  const center = [1612.5, 2512.5];

  // const village_of_barovia = [1240, 3950];
  const vallaki = [2155, 2020];
  // const krezk = [2250, 580];
  // const ravenloft = [1580, 3595];

  return (
    <div className="App">
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="#">Barovian Activity Map</Navbar.Brand>
      </Navbar>

      {/* cos201.jpg: 5025 x 3225 */}
      <Container fluid className="p-0">
        <Row noGutters>
          <Col>
          <MapContainer
            center={center}
            zoom={-2}
            maxZoom={2}
            minZoom={-2}
            maxBounds={ bounds }
            crs={CRS.Simple}
            id="mapId"
          >
            <ImageOverlay
              url='cos201.jpg'
              bounds={ bounds }
            />
            <Marker position={vallaki}></Marker>
          </MapContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

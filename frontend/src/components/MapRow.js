import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MapContainer, ImageOverlay, Marker } from 'react-leaflet'
import { CRS } from 'leaflet';
// import { Icon } from 'leaflet';

class MapRow extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      // CRS Simple coordinates in the form: [y, x]
      bounds: [[0, 0], [3225, 5025]],
      center: [1612.5, 2512.5],
    }
  }

  render() {

    // @TODO - Define different icons for Assets and Events
    // const myIcon = new Icon({
    //   iconUrl: 'my-icon.png',
    //   iconSize: [38, 95],
    //   iconAnchor: [22, 94],
    //   popupAnchor: [-3, -76],
    //   shadowUrl: 'my-icon-shadow.png',
    //   shadowSize: [68, 95],
    //   shadowAnchor: [22, 94]
    // });

    return (
      <Row noGutters>
        <Col id="mapCol">
          <MapContainer
            center={this.state.center}
            crs={CRS.Simple}
            id="mapId"
            maxBounds={this.state.bounds}
            maxZoom={2}
            minZoom={-2}
            zoom={-2}
          >
            <ImageOverlay
              bounds={this.state.bounds}
              url='cos201.jpg'
            />
            {
              this.props.assets.map((asset) =>
                <Marker key={asset.id} position={[asset.y, asset.x]}></Marker>
              )
            }
          </MapContainer>
        </Col>
      </Row>
    )
  }
}

export default MapRow;

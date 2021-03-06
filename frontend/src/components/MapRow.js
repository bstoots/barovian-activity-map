import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MapContainer, ImageOverlay, Marker, Tooltip } from 'react-leaflet'
import { CRS } from 'leaflet';
// import { Icon } from 'leaflet';
import _ from 'lodash';

/**
 * Defines a Bootstrap row containing a Leaflet map representing the lands of Barovia
 */
class MapRow extends React.Component {

  /**
   * Constructor
   * 
   * @param {object} props       React props
   * @param {array} props.assets List of assets to render markers for on the map
   */
  constructor (props) {
    super(props);
    this.state = {
      // CRS Simple coordinates in the form: [y, x]
      bounds: [[0, 0], [3225, 5025]],
      center: [1612.5, 2512.5],
    }
  }

  /**
   * Renders the component
   */
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

    const assetsIsArray = _.isArray(this.props.assets);

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
            {assetsIsArray &&
              this.props.assets.map((asset) =>
                <Marker key={asset.id} position={[asset.y, asset.x]}>
                  <Tooltip>{asset.description}</Tooltip>
                </Marker>
              )
            }
          </MapContainer>
        </Col>
      </Row>
    )
  }
}

export default MapRow;

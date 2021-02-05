import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import _ from 'lodash';

class Navigation extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      assetCount: 0,
      eventCount: 0,
    };
  }

  getAssetCount (assets) {
    let assetCount = 0;
    if (_.isArrayLikeObject(assets)) {
      assetCount = _.size(assets);
    }
    return assetCount;
  }

  getEventCount (events) {
    let eventCount = 0;
    if (_.isArrayLikeObject(events)) {
      eventCount = _.size(events);
    }
    return eventCount;
  }

  render () {
    const assetCount = this.getAssetCount(this.props.assets);
    const eventCount = this.getEventCount(this.props.events);
    return (
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="#">Barovian Activity Map</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={`Assets: ${assetCount}`} id="basic-nav-dropdown">
              {
                this.props.assets.map((asset) => 
                  <NavDropdown.Item href="" key={asset.id}>{asset.name}</NavDropdown.Item>
                )
              }
            </NavDropdown>
            <NavDropdown title={`Events: ${eventCount}`} id="basic-nav-dropdown">
              {
                this.props.events.map((event) => 
                  <NavDropdown.Item href="" key={event.id}>{event.name}</NavDropdown.Item>
                )
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

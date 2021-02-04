import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import _ from 'lodash';

class Navigation extends React.Component {
  
  constructor (props) {
    super(props);
    this.assets = _.get(props, 'assets', []);
    this.events = _.get(props, 'events', []);
  }

  render () {
    // @TODO - There's still more validation to be done here.  We don't want to map over assets if assets is
    //         not an array (the expected format).  More handling required.
    let assetCount = 0;
    if (_.isArrayLikeObject(this.assets)) {
      assetCount = _.size(this.assets);
    }

    let eventCount = 0;
    if (_.isArrayLikeObject(this.events)) {
      eventCount = _.size(this.events);
    }

    return (
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="#">Barovian Activity Map</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={`Assets: ${assetCount}`} id="basic-nav-dropdown">
              {
                this.assets.map((asset) => 
                  <NavDropdown.Item href="" key={asset.id}>{asset.name}</NavDropdown.Item>
                )
              }
            </NavDropdown>
            <NavDropdown title={`Events: ${eventCount}`} id="basic-nav-dropdown">
              {
                this.events.map((event) => 
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

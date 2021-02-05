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
    };
  }

  getAssetCount (assets) {
    let assetCount = 0;
    if (_.isArrayLikeObject(assets)) {
      assetCount = _.size(assets);
    }
    return assetCount;
  }

  render () {
    const assetCount = this.getAssetCount(this.props.assets);
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

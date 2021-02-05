import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import _ from 'lodash';

class Navigation extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {};
  }

  getAssetCount (assets) {
    let assetCount = '?';
    if (_.isArray(assets)) {
      assetCount = _.size(assets);
    }
    return assetCount;
  }

  render () {
    const assetsIsArray = _.isArray(this.props.assets);
    const assetCount = this.getAssetCount(this.props.assets);
    return (
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand href="#">Barovian Activity Map</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={`Assets: ${assetCount}`} id="basic-nav-dropdown">
              {assetsIsArray
                ? (assetCount === 0)
                  ? <NavDropdown.Item href="" key="empty">No Assets</NavDropdown.Item>
                  : this.props.assets.map((asset) => <NavDropdown.Item href="" key={asset.id}>{asset.name}</NavDropdown.Item>)
                : <NavDropdown.Item href="" key="empty">Assets Unknown</NavDropdown.Item>
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

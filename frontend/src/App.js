import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MapRow from './components/MapRow';
import EventRow from './components/EventRow';
import Client from './libraries/client';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      eventTypes: [],
      events: [],
    };
    this.client = new Client({host: "localhost", port: "8000"});
  }

  componentDidMount() {
    // Get assets from API
    this.client.fetchAssets(this.getClientHandlers('assets', []));
    // Get event types from API
    this.client.fetchEventTypes(this.getClientHandlers('eventTypes', []));
    // Get events from API
    this.client.fetchEvents(this.getClientHandlers('events', []));
  }

  getClientHandlers (stateKey, stateValue) {
    return {
      successFn: this.getSuccessFn(stateKey),
      errorFn: this.getErrorFn(stateKey, stateValue),
    }
  }

  getSuccessFn (stateKey) {
    return (data) => {
      this.setState({ [stateKey]: data }) 
    };
  }

  getErrorFn (stateKey, stateValue) {
    return (error) => {
      console.error(error);
      this.setState({ [stateKey]: stateValue }) 
    };
  }

  render() {
    return (
      <div className="App">
        <Container fluid className="p-0">
          <Navigation assets={this.state.assets} />
          <MapRow assets={this.state.assets} events={this.state.events} />
          <EventRow events={this.state.events} />
        </Container>
      </div>
    );
  }

}

export default App;

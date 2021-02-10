import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MapRow from './components/MapRow';
import EventRow from './components/EventRow';
import Client from './libraries/client';

/**
 * Defines the component containing the core application
 */
class App extends React.Component {

  /**
   * Constructor
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      // Assets are items of interest that we want to track
      assets: [],
      // Event types contains definitions for the types of events in the system
      eventTypes: [],
      // Events are occurrences of happenings tracked by the map 
      events: [],
    };
    this.client = new Client({host: "localhost", port: "8000"});
  }

  /**
   * Hook into the component lifecycle to fetch data
   */
  componentDidMount() {
    // Get assets from API
    this.client.fetchAssets(this.getClientHandlers('assets', []));
    // Get event types from API
    this.client.fetchEventTypes(this.getClientHandlers('eventTypes', []));
    // Get events from API
    this.client.fetchEvents(this.getClientHandlers('events', []));
  }

  /**
   * Gets an object containing callbacks in the format expected by our API client
   * 
   * @param {string} stateKey  Key corresponding to state
   * @param {mixed} stateValue Default value for the state
   * @returns {object}         Object able to be passed to API client functions
   */
  getClientHandlers (stateKey, stateValue) {
    return {
      successFn: this.getSuccessFn(stateKey),
      errorFn: this.getErrorFn(stateKey, stateValue),
    }
  }

  /**
   * Gets a function that sets state upon API client success
   * 
   * @param {string} stateKey Key corresponding to state
   * @returns {function}      Callable function that accepts data and sets state
   */
  getSuccessFn (stateKey) {
    return (data) => {
      this.setState({ [stateKey]: data }) 
    };
  }

  /**
   * Gets a function that sets default state upon API client failure. Also emits a console.error.
   * 
   * @param {*} stateKey   Key corresponding to state
   * @param {*} stateValue Default value for the state
   * @returns {function}   Callable function that accepts error object and sets default state
   */
  getErrorFn (stateKey, stateValue) {
    return (error) => {
      console.error(error);
      this.setState({ [stateKey]: stateValue }) 
    };
  }

  /**
   * Renders the component
   */
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

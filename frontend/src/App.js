import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MapRow from './components/MapRow';
import EventRow from './components/EventRow';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      events: [],
    };
  }

  componentDidMount() {
    this.fetchAssets();
    this.fetchEvents();
  }

  fetchAssets() {
    fetch('http://localhost:8000/api/assets/')
      .then(response => response.json())
      .then(data => this.setState({ assets: data }))
      .catch(error => {
        console.error(error);
        // @TODO - Could setState here if there's something to report
      });
  }

  fetchEvents() {
    fetch('http://localhost:8000/api/events/')
      .then(response => response.json())
      .then(data => this.setState({ events: data }))
      .catch(error => {
        console.error(error);
        // @TODO - Could setState here if there's something to report
      });
  }

  render() {
    return (
      <div className="App">
        <Container fluid className="p-0">
          <Navigation assets={this.state.assets} />
          <MapRow assets={this.state.assets} events={this.state.events} />
          <EventRow events={this.state.events} />
        </Container>
      </div >
    );
  }

}

export default App;

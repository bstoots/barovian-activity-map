import './App.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MapRow from './components/MapRow';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      assets: [],
      // @TODO - Fetch this data from the Django API
      events: [
        {
          "id": 1,
          "event_type_id": 1,
          "name": "Vampire Sighting",
          "description": "Sharp teeth, meanacing glare, etc",
          "x": 2030,
          "y": 2145
        },
        {
          "id": 2,
          "event_type_id": 2,
          "name": "Werewolf Sighting",
          "description": "Sharp teeth, smells bad, etc",
          "x": 590,
          "y": 2240
        },
      ],
    };
  }

  componentDidMount() {
    this.fetchAssets();
  }

  fetchAssets () {
    fetch('http://localhost:8000/api/assets/')
      .then(response => response.json())
      .then(data => this.setState({assets: data}))
      .catch(error => {
        console.log(error);
        // @TODO - Could setState here if there's something to report
      });
  }

  render () {
    return (
      <div className="App">
        <Container fluid className="p-0">
          <Navigation assets={this.state.assets} events={this.state.events}/>
          <MapRow assets={this.state.assets} events={this.state.events}/>
        </Container>
      </div>
    );
  }

}

export default App;

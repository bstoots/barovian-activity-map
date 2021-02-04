import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import MapRow from './components/MapRow';

function App() {

  // @TODO - Fetch this data from the Django API
  const assets = [
    {
        "id": 3,
        "name": "Vallaki",
        "description": "The Town of Vallaki",
        "x": 2020,
        "y": 2155
    },
    {
      "id": 4,
      "name": "Krezk",
      "description": "The Village of Krezk",
      "x": 580,
      "y": 2250
    },
    {
      "id": 5,
      "name": "Barovia",
      "description": "The Village of Barovia",
      "x": 3950,
      "y": 1240
    },
    {
      "id": 6,
      "name": "Ravenloft",
      "description": "Castle Ravenloft",
      "x": 3595,
      "y": 1580
    },
  ];

  // @TODO - Fetch this data from the Django API
  const events = [
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
  ]

  return (
    <div className="App">
      <Container fluid className="p-0">
        <Navigation assets={assets} events={events}/>
        <MapRow assets={assets} events={events}/>
      </Container>
    </div>
  );
}

export default App;

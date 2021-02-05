import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

/**
 * Defines a Bootstrap row containing a table structure for displaying events
 */
class EventRow extends React.Component {

  /**
   * Constructor
   * 
   * @param {object} props       React props
   * @param {array} props.events List of events to populate in the table
   */
  constructor(props) {
    super(props);
    this.state = {}
  }

  /**
   * Renders the component
   */
  render() {
    return (
      <Row noGutters>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Name</th>
                <th>Description</th>
                <th>X</th>
                <th>Y</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.events.map((event) =>
                <tr key={event.event_id}>
                  <td>{event.event_id}</td>
                  <td>{event.event_type_id}</td>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>{event.x}</td>
                  <td>{event.y}</td>
                  <td>{event.created}</td>
                </tr>
              )
            }
            </tbody>
          </Table>
        </Col>
      </Row>
    )
  }
}

export default EventRow;

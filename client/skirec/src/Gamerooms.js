import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function GameRooms() {
  const [validated, setValidated] = useState(false);
  const [players, setPlayers] = useState("");
  const [betting, setBetting] = useState("");
  const [teams, setTeams] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Post form data to the server
      fetch('/gamerooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          players,
          betting,
          teams
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="players">
        <Form.Label>Number of Players</Form.Label>
        <Form.Control as="select" value={players} onChange={e => setPlayers(e.target.value)} required>
          <option value="" disabled>Choose...</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please choose the number of players.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="betting">
        <Form.Label>Betting</Form.Label>
        <Form.Control as="select" value={betting} onChange={e => setBetting(e.target.value)} required>
          <option value="" disabled>Choose...</option>
          <option>On</option>
          <option>Off</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please choose an option.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="teams">
        <Form.Label>Teams</Form.Label>
        <Form.Control as="select" value={teams} onChange={e => setTeams(e.target.value)} required>
          <option value="" disabled>Choose...</option>
          <option>On</option>
          <option>Off</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please choose an option.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default GameRooms;



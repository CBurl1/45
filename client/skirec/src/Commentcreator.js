import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/user';
import { Container, Form, Button } from 'react-bootstrap';

function CommentCreator() {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [selectedResort, setSelectedResort] = useState('');
  const [resorts, setResorts] = useState([]);
  const [commentImageLink, setCommentImageLink] = useState('');

  useEffect(() => {
    fetch('/skiresorts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched resorts:', data);
        setResorts(data);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedResortObj = resorts.find((resort) => resort.id === selectedResort);
    console.log(selectedResortObj);

    const data = {
      comment: comment,
      resort: selectedResort,
      user_id: user ? user.id : null,
      commentImageLink: commentImageLink,
    };

    console.log('Sending data:', data);

    const response = await fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setComment('');
      setSelectedResort('');
      setCommentImageLink('');
      alert('Comment successfully posted!');
    } else {
      alert('Error posting comment!');
    }
  };

  return (
    <Container>
      <h2>Make a comment, {user && user.name}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="resort">
          <Form.Label>Resort:</Form.Label>
          <Form.Control
            as="select"
            value={selectedResort}
            onChange={(event) => setSelectedResort(event.target.value)}
            required
          >
            <option value="">Select a resort</option>
            {resorts.map((resort) => (
              <option key={resort.id} value={resort.id}>
                {resort.name}, {resort.location_state}, {resort.location_region}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="commentImageLink">
          <Form.Label>Comment Image Link:</Form.Label>
          <Form.Control
            type="text"
            value={commentImageLink}
            onChange={(event) => setCommentImageLink(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CommentCreator;


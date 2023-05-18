import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/user';

function CommentCreator() {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [selectedResort, setSelectedResort] = useState('');
  const [resorts, setResorts] = useState([]);
  const [commentImageLink, setCommentImageLink] = useState('');

  useEffect(() => {
    fetch('/skiresorts')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched resorts:', data);
        setResorts(data);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedResortObj = resorts.find(resort => resort.id === selectedResort);
    console.log(selectedResortObj);

    const data = {
      comment: comment,
      resort: selectedResort,
      user_id: user ? user.id : null,
      commentImageLink: commentImageLink
    };

    console.log('Sending data:', data);

    const response = await fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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
    <div>
      <h2>Make a comment, {user && user.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="resort">Resort:</label>
          <select
            id="resort"
            name="resort"
            value={selectedResort}
            onChange={(event) => setSelectedResort(event.target.value)}
            required
          >
            <option value="">Select a resort</option>
            {resorts.map(resort => (
              <option key={resort.id} value={resort.id}>
                {resort.name}, {resort.location_state}, {resort.location_region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="commentImageLink">Comment Image Link:</label>
          <input
            type="text"
            id="commentImageLink"
            name="commentImageLink"
            value={commentImageLink}
            onChange={(event) => setCommentImageLink(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreator;

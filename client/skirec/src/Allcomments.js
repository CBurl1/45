import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CommentComponent = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('/showcomments');
      const data = await response.json();
      const sortedComments = data.sort((a, b) => {
        if (a.resort_name < b.resort_name) return -1;
        if (a.resort_name > b.resort_name) return 1;
        return 0;
      });
      setComments(sortedComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const renderCommentsByResort = () => {
    let currentResort = null;
    return comments.map((comment) => {
      if (comment.resort_name !== currentResort) {
        currentResort = comment.resort_name;
        return (
          <div key={comment.resort_name} className="comment-group">
            <h2 className="resort-name">{comment.resort_name}</h2>
            <div className="comment-container">
              <CommentList comment={comment} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="comment-container" key={comment.id}>
            <CommentList comment={comment} />
          </div>
        );
      }
    });
  };

  const CommentList = ({ comment }) => (
    <Card style={{ marginBottom: '10px' }}>
      <Card.Body>
        <Card.Title>{comment.comment}</Card.Title>
        {comment.comment_image && (
          <Card.Img src={comment.comment_image} alt="Comment Image" />
        )}
        <Card.Text>{comment.user_name}</Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <ListGroup>{renderCommentsByResort()}</ListGroup>
    </div>
  );
};

export default CommentComponent;

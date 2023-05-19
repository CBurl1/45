import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/user';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function UserComments() {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);

  const [editingComment, setEditingComment] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');

  useEffect(() => {
    async function fetchUserComments() {
      const response = await fetch(`/user-comments/${user.id}`);
      const data = await response.json();
      setComments(data.comments);
    }

    if (user) {
      fetchUserComments();
    }
  }, [user]);

  const handleEditComment = (comment) => {
    setEditingComment(comment);
    setEditedCommentText(comment.comment);
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
    setEditedCommentText('');
  };

  const handleSaveEdit = async () => {
    const response = await fetch(`/changecomment/${editingComment.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: editedCommentText,
      }),
    });
    const data = await response.json();

    // Update the comment in the local state
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === data.id ? { ...comment, comment: data.comment } : comment
      )
    );

    // Clear the edit state
    setEditingComment(null);
    setEditedCommentText('');
  };

  const handleDeleteComment = async (commentId) => {
    const response = await fetch(`/deletecomment/${commentId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Remove the deleted comment from the local state
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
    }
  };

  return (
    <Container>
      <h2>{user.name}'s Comments</h2>
      {comments.map((comment) => (
        <Card key={comment.id} className="my-4">
          <Card.Body>
            <div className="d-flex justify-content-end mb-2">
              <Button variant="primary" className="mr-2" onClick={() => handleEditComment(comment)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </Button>
            </div>
            {editingComment?.id === comment.id ? (
              <div>
                <textarea
                  value={editedCommentText}
                  onChange={(e) => setEditedCommentText(e.target.value)}
                />
                <Button variant="secondary" className="mr-2" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSaveEdit}>
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <p><strong>Resort:</strong> {comment.resort.name}</p>
                <p><strong>Comment:</strong> {comment.comment}</p>
                {comment.comment_image && <img src={comment.comment_image} alt="Comment Image" />}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default UserComments;

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/user';

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

  return (
    <div>
      <h2>{user.name}'s Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          {editingComment?.id === comment.id ? (
            <div>
              <textarea
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
              />
              <button onClick={handleCancelEdit}>Cancel</button>
              <button onClick={handleSaveEdit}>Save</button>
            </div>
          ) : (
            <div>
              <p>Resort: {comment.resort.name}</p>
              <p>Comment: {comment.comment}</p>
              <button onClick={() => handleEditComment(comment)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserComments;


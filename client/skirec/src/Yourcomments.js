import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/user';

function UserComments() {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);

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

  return (
    <div>
      <h2>{user.name}'s Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>Resort: {comment.resort.name}</p>
          <p>Comment: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default UserComments;

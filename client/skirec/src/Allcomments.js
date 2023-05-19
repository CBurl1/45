import React, { useState, useEffect } from 'react';

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
          <div key={comment.resort_name}>
            <h2 style={{ fontSize: '24px' }}>{comment.resort_name}</h2>
            <CommentList comment={comment} />
          </div>
        );
      } else {
        return <CommentList key={comment.id} comment={comment} />;
      }
    });
  };

  const CommentList = ({ comment }) => (
    <ul>
      <li>
        <div>Comment: {comment.comment}</div>
        {comment.comment_image && (
          <div>
            Comment Image:
            <img src={comment.comment_image} alt="Comment Image" />
          </div>
        )}
        <div>User Name: {comment.user_name}</div>
      </li>
    </ul>
  );

  return <div>{renderCommentsByResort()}</div>;
};

export default CommentComponent;





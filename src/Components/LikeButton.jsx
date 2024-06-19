import React, { useState } from 'react';

const LikeButton = ({likecount}) => {

  const [likes, setLikes] = useState(likecount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>
      <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
    </div>
  );
};

export default LikeButton;
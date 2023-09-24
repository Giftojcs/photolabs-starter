import React, { useState } from 'react';

const LikeIcon = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-icon" onClick={toggleLike}>
      {liked ? (
        <i className="fas fa-heart"></i>
      ) : (
        <i className="far fa-heart"></i> 
      )}
    </div>
  );
};

export default LikeIcon;

import React from "react";

const LikedPhotos = ({ likedCount }) => {
  return (
    <div className="liked-photos">
      <span>Total liked photos: {likedCount}</span>
    </div>
  );
};

export default LikedPhotos;

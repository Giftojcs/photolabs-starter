import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import PhotoListItem from "./PhotoListItem";

// PhotoList Component
const PhotoList = (props) => {
  const { toggleFavorite: modifiedToggleFavorite, favoritedPhotos: modifiedFavoritedPhotos } = props;
  return (
    <>
      <ul className="photo-list">
        {props.photos.map((photo) => (
          <PhotoListItem key={photo.id}
            photo={photo}
            toggleFavorite={modifiedToggleFavorite}
            favoritedPhotos={modifiedFavoritedPhotos}
            openModalDetails={props.openModalDetails} 
          />
        ))}
      </ul>
    </>
  );
};

export default PhotoList;




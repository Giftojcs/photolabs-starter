import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// ModifiedPhotoListItem Component
const PhotoListItem = (props) => {
  const { id: modifiedId, location: modifiedLocation, urls: modifiedUrls, user: modifiedUser } = props.photo;
  const { favoritedPhotos: modifiedFavoritedPhotos, toggleFavorite: modifiedToggleFavorite } = props;

  // Function for opening Modal
  const onClick = () => {
    props.openModalDetails(props.photo);
  }

  // Short circuit for favorited Photos
  const isFavorited = modifiedFavoritedPhotos && modifiedFavoritedPhotos.includes(modifiedId);

  return (
    <>
      <div className="photo-list__item">
        <PhotoFavButton
          isFavorited={isFavorited}
          toggleFavorite={() => modifiedToggleFavorite(modifiedId)}
        />
        <img
          className="photo-list__image"
          src={modifiedUrls.regular}
          onClick={onClick}
          alt="image of Photo"
        />

        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={modifiedUser.profile}
            alt="profile image"
          />
          <div className="photo-list__user-info">
            {modifiedUser.name}
            <div className="photo-list__user-location">
              {`${modifiedLocation.city}, ${modifiedLocation.country}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PhotoListItem;

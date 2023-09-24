import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  const { id, slug, label } = topic;

  return (
    <div className="topic-list__item" key={id}>
      <span className="topic-label">{label}</span>
    </div>
  );
};

export default TopicListItem;


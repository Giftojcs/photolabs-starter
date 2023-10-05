import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// ModifiedTopicList Component
const ModifiedTopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((modifiedTopic) => (
        <TopicListItem
          key={modifiedTopic.id}
          topic={modifiedTopic.title}
          getPhotosByTopic={() => props.getPhotosByTopic(modifiedTopic.id)}
        />
      ))}
    </div>
  );
};

export default ModifiedTopicList;



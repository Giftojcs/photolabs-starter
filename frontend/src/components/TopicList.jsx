import React from "react";
import TopicListItem from "./TopicListItem";
import { FaHeart } from "react-icons/fa";
import useFetchTopics from "../Hooks/useFetchTopics";
import "../styles/TopicList.scss";

const TopicList = ({ selectedTopic, onSelectTopic }) => {
  const { topics, isLoading, isError } = useFetchTopics();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading topics.</div>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      <ul className="topic-list">
        {topics.map((topic) => (
          <li
            key={topic.id}
            className={`topic-list__item ${selectedTopic && selectedTopic.id === topic.id ? 'active' : ''}`}
            onClick={() => onSelectTopic(topic)}
          >
            {topic.title}
          </li>
        ))}
        <li
          className={`topic-list__item ${!selectedTopic ? 'active' : ''}`}
          onClick={() => onSelectTopic(null)}
        >
          <FaHeart /> Liked Photos
        </li>
      </ul>
    </div>
  );
};

export default TopicList;






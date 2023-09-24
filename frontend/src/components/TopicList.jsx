// Topics.js
import React from "react";
import "../styles/TopicList.scss"; // Assuming TopicList styles are defined here
import { FaHeart } from "react-icons/fa";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = ({ photoCategories }) => {
  const filteredTopics = sampleDataForTopicList.filter((topic) =>
    photoCategories.includes(topic.slug)
  );

  return (
    <ul className="top-nav-bar__topic-list">
      {filteredTopics.map((topic) => (
        <li key={topic.id} className="topic-list__item">
          {topic.title}
        </li>
      ))}
      <li className="topic-list__item">
        <FaHeart /> Liked Photos
      </li>
    </ul>
  );
};

export default TopicList;





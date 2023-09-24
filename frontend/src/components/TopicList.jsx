import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import mockTopics from "../mocks/topics";
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
const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {mockTopics.map((topic) => (
        <TopicListItem key={topic.id} data={topic} />
      ))}
      <ul className="topic-list">
        {mockTopics.map((topic) => (
          <li key={topic.id} className="topic-list__item">
            {topic.title}
          </li>
        ))}
        <li className="topic-list__item">
          <FaHeart /> Liked Photos
        </li>
      </ul>
    </div>
  );
};

export default TopicList;





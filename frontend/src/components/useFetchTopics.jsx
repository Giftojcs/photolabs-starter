import { useState, useEffect } from "react";

const useFetchTopics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate an API call to fetch topics
    const fetchTopics = async () => {
      try {
        // Fetch data from your API
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();

        // Set topics and loading state
        setTopics(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return { topics, isLoading, isError };
};

export default useFetchTopics;

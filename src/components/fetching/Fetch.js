import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchJSON = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchJSON();
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { $host } from "../utils/axios";
import Card from "./Card";


const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  console.log(tags)

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await $host.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
      console.log(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card type="sm" key={video._id} {...video} />

      ))}
    </Container>
  );
};

export default Recommendation;
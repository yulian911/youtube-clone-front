import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { $host } from "../utils/axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {

  const [video,setVideo]=useState([])

  useEffect(() => {

    const fetchData =async()=>{
      const {data} =await $host.get(`/videos/${type}`)
      setVideo(data)
    }
    fetchData()

  }, [type])


  
  return (
    <Container>
      {video.map((el)=>(
        <Card key={el._id} {...el}/>
      ))}


    </Container>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { $host } from "../utils/axios";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({desc,userId}) => {
  const [channel,setChannel]=useState({})

  useEffect(() => {
    const fetchData =async () =>{
      try{
        const channelRes =await $host.get(`/users/find/${userId}`)
        setChannel(channelRes.data)

      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [userId])

  console.log(channel)

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
        {channel.name} <Date>1 day ago</Date>
        </Name>
        <Text>
         {desc}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
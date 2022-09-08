import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <div>
      <Container>
        <h1>This a a Emoji Picker Application for UI Based !</h1>
      </Container>
    </div>
  );
};

export default Body;

const Container = styled.h1`
  display: flex;
  font-size: medium;
  justify-content: center;
  align-items: center;
`;

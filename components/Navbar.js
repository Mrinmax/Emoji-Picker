import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <Container>
        <h1>Emoji Picker</h1>
      </Container>
    </div>
  );
};

export default Navbar;

const Container = styled.h1`
  width: 100%;
  display: flex;
  color: #f675a8;
  font-size: medium;
  justify-content: center;
  align-items: center;
`;

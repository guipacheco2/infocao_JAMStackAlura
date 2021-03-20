import React from "react";
import styled from "styled-components";

const Status = (props) => <StyledStatus>{props.status}</StyledStatus>;

const StyledStatus = styled.p`
  background-color: ${theme => theme.branco};
  padding: 10px;
  display: inline-block;
  font-weight: bold;
  box-shadow: ${theme => `0 0 8px rgba(${theme.rosa}, 0.5)`};
`;

export default Status;

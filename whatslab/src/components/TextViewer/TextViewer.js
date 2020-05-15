import React from "react";
import styled from "styled-components";

import { TextInput } from "../TextInput/TextInput";

const MessageContainer = styled.div`
  width: 45%;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: flex-end;
  border: 1px solid #000;
`;

export class TextViewer extends React.Component {
  render() {
    return (
      <MessageContainer>
        <TextInput />
      </MessageContainer>
    );
  }
}

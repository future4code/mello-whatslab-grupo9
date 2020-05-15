import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
`;

export class TextInput extends React.Component {
  state = {
    usuario: "",
    mensagem: "",
  };

  onChangeMensagem = (event) => {
    this.setState({
      usuario: event.target.value,
      mensagem: event.target.value,
    });
  };

  render() {
    return (
      <InputContainer>
        <input
          placeholder={"Usuário"}
          value={this.state.value}
          onChange={this.onChangeTextos}
        />

        <input
          placeholder={"Mensagem"}
          value={this.state.value}
          onChange={this.onChangeTextos}
        />

        <button>Enviar</button>
      </InputContainer>
    );
  }
}

// onClick={}

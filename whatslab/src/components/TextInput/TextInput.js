import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
`;

const dadosMensagem = [
  {
  usuario: "",
  mensagem: ""
  }
]

export class TextInput extends React.Component {

  state = {

    dadosMensagem: dadosMensagem
    
  };

  addMensagem = (nMensagem) => {
    const novaMensagem = [...this.state.dadosMensagem, nMensagem]

    this.setState({ dadosMensagem: novaMensagem })
  } 

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
          value={this.state.usuario}
          onChange={this.onChangeTextos}
        />

        <input
          placeholder={"Mensagem"}
          value={this.state.mensagem}
          onChange={this.onChangeTextos}
        />

        <button onClick={this.addMensagem}>Enviar</button>
      </InputContainer>
    );
  }
}

// onClick={}

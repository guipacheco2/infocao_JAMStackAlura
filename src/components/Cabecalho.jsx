import React from "react";
import styled from "styled-components";
import Status from "./Status";

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <StyledCabecalhoTitulo>Seja bem-vindo ao InfoCão</StyledCabecalhoTitulo>

      <StyledCabecalhoText>
        Clique em um nome e te daremos informações úteis sobre a raça e uma
        imagem bem bonita.
      </StyledCabecalhoText>

      <Status />
    </StyledCabecalho>
  );
};

const StyledCabecalho = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.rosa};
`;

const StyledCabecalhoTitulo = styled.h1`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

const StyledCabecalhoText = styled.p`
  margin: 0;
`;

export default Cabecalho;

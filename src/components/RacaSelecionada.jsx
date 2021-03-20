import React from "react";
import styled from "styled-components";
import { useRacaSelecionada } from "../context/RacaSelecionadaContext";

const RacaSelecionada = () => {
  const raca = useRacaSelecionada();

  return (
    <StyledRacaSelecionada>
      <StyledRacaSelecionadaNome>{raca.name}</StyledRacaSelecionadaNome>
      <StyledRacaSelecionadaInfo>
        <StyledRacaSelecionadaInfoDescricao>
          Tempo de vida:
        </StyledRacaSelecionadaInfoDescricao>
        {raca.life_span}
      </StyledRacaSelecionadaInfo>
      <StyledRacaSelecionadaImagem alt="Imagem de raca" src={raca.imagem} />
    </StyledRacaSelecionada>
  );
};

const StyledRacaSelecionada = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid ${({ theme }) => theme.rosa};
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.rosaClaro};
  display: flex;
  flex-direction: column;
`;

const StyledRacaSelecionadaNome = styled.h2`
  margin: 0;
  background-color: ${({ theme }) => theme.rosa};
  color: ${({ theme }) => theme.branco};
  padding-top: 10px;
  font-size: 18px;
  font-weight: normal;
`;

const StyledRacaSelecionadaInfo = styled.p`
  background-color: ${({ theme }) => theme.rosa};
  margin: 0;
  color: $branco;
  padding: 5px;
  font-size: 14px;
`;

const StyledRacaSelecionadaInfoDescricao = styled.span`
  font-weight: bold;
`;

const StyledRacaSelecionadaImagem = styled.img`
  max-width: 100%;
  min-width: 300px;
  max-height: 300px;
  object-fit: cover;
  flex-grow: 1;
`;

export default RacaSelecionada;

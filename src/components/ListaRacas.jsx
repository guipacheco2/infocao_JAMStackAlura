import React from "react";
import styled from "styled-components";
import { useRacas } from "../context/RacasContext";
import { useSelecionaRaca } from "../context/RacaSelecionadaContext";

const ListaRacas = () => {
  const racas = useRacas();
  const selecionaRaca = useSelecionaRaca();

  return (
    <StyledListaRacas>
      {racas.map((raca) => (
        <StyledListaRacasItem
          key={raca.id}
          onClick={() => selecionaRaca(raca.name)}
        >
          {raca.name}
        </StyledListaRacasItem>
      ))}
    </StyledListaRacas>
  );
};

const StyledListaRacas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledListaRacasItem = styled.li`
  background-color: ${({ theme }) => theme.rosa};
  border: 2px solid ${({ theme }) => theme.rosaClaro};
  border-radius: 5px;
  color: ${({ theme }) => theme.branco};
  cursor: pointer;
  flex-grow: 1;
  margin: 10px;
  padding: 15px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.rosaClaro};
    color: ${({ theme }) => theme.rosa};
  }
`;

export default ListaRacas;

import React from "react";
import styled from "styled-components";

const RacaNaoSelecionada = () => (
  <div>
    <StyledRacaNaoSelecionada
      alt="Pug triste"
      src="https://www.oversodoinverso.com.br/wp-content/uploads/2015/05/pugs-tristes-2.jpg"
    />
  </div>
);

const StyledRacaNaoSelecionada = styled.img`
  display: block;
  height: 150px;
  margin: 0 auto;
`;

export default RacaNaoSelecionada;

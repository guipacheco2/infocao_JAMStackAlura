import styled from "styled-components";
import Cabecalho from "../components/Cabecalho";
import ListaRacas from "../components/ListaRacas";
import Raca from "../components/Raca";
import { Theme } from "../components/Theme";
import { RacasContextProvider } from "../context/RacasContext";
import { RacaSelecionadaContextProvider } from "../context/RacaSelecionadaContext";
import { StatusContextProvider } from "../context/StatusContext";

export default function HomePage() {
  return (
    <Theme>
      <StyledContainer>
        <StatusContextProvider>
          <Cabecalho />
          <RacasContextProvider>
            <RacaSelecionadaContextProvider>
              <Raca />
              <ListaRacas />
            </RacaSelecionadaContextProvider>
          </RacasContextProvider>
        </StatusContextProvider>
      </StyledContainer>
    </Theme>
  );
}

const StyledContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

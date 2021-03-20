import styled from "styled-components";
import { buscaSobreRacas, buscaTodasRacas } from "../api";
import Cabecalho from "../components/Cabecalho";
import ListaRacas from "../components/ListaRacas";
import Raca from "../components/Raca";
import { Theme } from "../components/Theme";
import { RacasContextProvider } from "../context/RacasContext";
import { RacaSelecionadaContextProvider } from "../context/RacaSelecionadaContext";
import { StatusContextProvider } from "../context/StatusContext";

export default function HomePage({ racas }) {
  return (
    <Theme>
      <StyledContainer>
        <RacasContextProvider racas={racas}>
          <StatusContextProvider>
            <RacaSelecionadaContextProvider>
              <Cabecalho />
              <Raca />
              <ListaRacas />
            </RacaSelecionadaContextProvider>
          </StatusContextProvider>
        </RacasContextProvider>
      </StyledContainer>
    </Theme>
  );
}

export async function getStaticProps() {
  const [sobreRacas, todasRacas] = await Promise.all([
    buscaSobreRacas(),
    buscaTodasRacas(),
  ]);

  const racas = sobreRacas.filter((sobre) =>
    todasRacas.includes(sobre.name.toLowerCase())
  );

  return { props: { racas } };
}

const StyledContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

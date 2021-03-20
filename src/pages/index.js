import { useEffect, useState } from "react";
import styled from "styled-components";
import { buscaImagemPorRaca, buscaSobreRacas, buscaTodasRacas } from "../api";
import Cabecalho from "../components/Cabecalho";
import ListaRacas from "../components/ListaRacas";
import Raca from "../components/Raca";
import { Theme } from "../components/Theme";

export default function HomePage() {
  const [status, setStatus] = useState("");
  const [racas, setRacas] = useState([]);
  const [racaSelecionada, setRacaSelecionada] = useState(null);

  useEffect(() => {
    Promise.all([buscaSobreRacas(), buscaTodasRacas()])
      .then(([sobreRacas, racas]) => {
        const listaRacasMostradas = sobreRacas.filter((sobre) =>
          racas.includes(sobre.name.toLowerCase())
        );

        setRacas(listaRacasMostradas);
      })
      .catch(() => {
        setStatus(
          "Oops, algo deu errado no carregamento da página. Pode tentar novamente?"
        );
      });
  }, []);

  function selecionaRaca(raca) {
    const infoSelecionada = racas.filter((infoRaca) => infoRaca.name === raca);

    buscaImagemPorRaca(raca)
      .then((imagem) => {
        setRacaSelecionada({
          imagem,
          ...infoSelecionada[0],
        });

        setStatus(
          "A imagem sempre será diferente, pode clicar quantas vezes quiser!"
        );
      })
      .catch((erro) => {
        const eh404 = erro.response.status === 404;

        const mensagem = eh404
          ? "Não encontramos essa raça :("
          : "Oops, algo deu errado. Pode tentar novamente?";

        setStatus(mensagem);
      });
  }

  return (
    <Theme>
      <StyledContainer>
        <Cabecalho status={status} />
        <Raca raca={racaSelecionada} />
        <ListaRacas racas={racas} selecionaRaca={selecionaRaca} />
      </StyledContainer>
    </Theme>
  );
}

const StyledContainer = styled.div`
  padding: 30px;
  margin: 0 auto;
`;

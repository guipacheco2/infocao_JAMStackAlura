import React from "react";
import { useRacaSelecionada } from "../context/RacaSelecionadaContext";
import RacaNaoSelecionada from "./RacaNaoSelecionada";
import RacaSelecionada from "./RacaSelecionada";

const Raca = () => {
  const raca = useRacaSelecionada();
  const racaFoiSelecionada = Boolean(raca);

  return racaFoiSelecionada ? <RacaSelecionada /> : <RacaNaoSelecionada />;
};

export default Raca;

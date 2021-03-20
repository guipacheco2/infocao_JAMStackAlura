import React, { createContext, useState, useEffect, useContext } from "react";
import { buscaSobreRacas, buscaTodasRacas } from "../api";
import { useSetStatus } from "./StatusContext";

const RacasContext = createContext();

export function useRacas() {
  return useContext(RacasContext).racas;
}

export function useSetRacas() {
  return useContext(RacasContext).setRacas;
}

export function RacasContextProvider({ children }) {
  const setStatus = useSetStatus();

  const [racas, setRacas] = useState([]);

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

  return (
    <RacasContext.Provider value={{ racas, setRacas }}>
      {children}
    </RacasContext.Provider>
  );
}

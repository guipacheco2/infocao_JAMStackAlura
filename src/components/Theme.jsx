import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import NextHead from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  ${normalize}

  body {
    background-color: ${({ theme }) => theme.azulClaro};
    font-family: ${({ theme }) => theme.fontePadrao};
  }
`;

export function Theme({ children }) {
  return (
    <ThemeProvider
      theme={{
        fontePadrao: "'Open Sans', sans-serif",
        azul: "#8AC6FD",
        azulClaro: "#f0ffff",
        verdeAgua: "#7bffff",
        branco: "#fff",
        rosa: "#ffa5ae",
        rosaClaro: "#ffd7df",
        cinzaClaro: "#efefef",
        laranja: "#fe5f55",
        marrom: "#311e10",
      }}
    >
      <NextHead>
        <link
          href="https://fonts.googleapis.com/css2?family=OpenSans&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

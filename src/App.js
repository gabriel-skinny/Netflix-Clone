import React from "react"
import GlobalStyle from "./style/globalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import List from "./components/List";

function App() {
  return (
    <>
      <GlobalStyle />

      <Header/>
      <Main />
      <List title="Minha lista"/>
      <List title="Continuar assistindo"/>
      <List title="Populares na Netflix"/>
      <List title="Em alta"/>
      <List title="Assistir novamente"/>
      <List title="Top 10 de hoje no Brasil"/>
      <List title="Comédia com drama"/>
    </>
  );
}

export default App;

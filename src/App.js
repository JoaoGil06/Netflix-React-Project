import React from "react";

import requests from "./api/requests";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Row
        title="Netflix Originais"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Tendências" fetchUrl={requests.fetchTrending} />
      <Row title="Melhor classificação" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de Acção" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Filmes de Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />

      <GlobalStyles />
    </div>
  );
}

export default App;

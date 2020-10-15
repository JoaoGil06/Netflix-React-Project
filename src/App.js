import React from "react";

import requests from "./api/requests";
import Row from "./components/Row";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default App;

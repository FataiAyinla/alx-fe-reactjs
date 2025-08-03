import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;

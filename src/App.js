import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("emir");
  return (
    <div className="App">
      <header className="App-header">
        <Header
          onClick={() => {
            alert("h1 tıklandı!");
          }}
          userName={userName}
        />
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [userName, setUserName] = useState("emir")
  const count=useSelector((state)=>state.count)
  return (
    <div className="App">
      <header className="App-header">
        Sayı: {count}
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

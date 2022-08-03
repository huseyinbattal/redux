import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import { SET_USERNAME } from "./store/actions/userActions";
import { setUserName } from "./store/actions/userActions";

function App() {
  const [userName] = useState("emir");
  const dispatch = useDispatch();
  // const count=useSelector((state)=>state.count)
  return (
    <div className="App">

<button>Click and use redux with async</button>

      <button
        onClick={() => {
          dispatch(setUserName("hüseyin"));
        }}
      >
        Change Name
      </button>
      <header className="App-header">
        Sayı:
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import {SET_USERNAME} from "./store/actions/userActions"

function App() {

  const [userName, setUserName] = useState("emir")
  const dispatch = useDispatch();
 // const count=useSelector((state)=>state.count)
  return (
    <div className="App">
      <button onClick={() => {
        dispatch({
          type: SET_USERNAME,
          payload:"hüseyin"
        })
      }}>Change Name</button>
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

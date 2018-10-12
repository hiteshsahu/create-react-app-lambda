import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Drawer from "./components/Drawer"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App" id ="ReactApp">
    <BrowserRouter>
        <Drawer/>
    </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

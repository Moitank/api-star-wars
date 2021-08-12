import React from "react";
import style from "./Botao.css";

function Botao({ random, children }) {
  return (
    <div className="App">

      <button onClick={random}>{children}</button>
    </div>
  );
}

export default Botao;

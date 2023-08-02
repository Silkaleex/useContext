import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Acerca = () => {
  const todosLosDatos = useContext(PruebaContext)
  return (
    <div>
      <h1>Acerca De</h1>
      <p>Pagina de Acerca De</p>
      {/* <p>Valor Compartido:<strong>{JSON.stringify(todosLosDatos)}</strong></p> */}
    </div>
  );
};

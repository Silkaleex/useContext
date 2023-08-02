import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Articulos = () => {
  const contenido = useContext(PruebaContext)
  return (
    <div>
      <h1>Articulos</h1>
      <p>Pagina de Articulos</p>
      {/* <p>Valor Compartido:<strong>{contenido.id}</strong> </p> */}
    </div>
  );
};

import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Contacto = () => {
  const exportar = useContext(PruebaContext)
  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de Contacto</p>
       <p>Valor compartido:<strong>{JSON.stringify(exportar.usuario)}</strong> </p> 
      {/* <p>Valor compartido:<strong>{exportar.contenido}</strong> </p> */}
    </div>
  );
};

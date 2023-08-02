import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Login = () => {
  const {usuario,setUsuario} = useContext(PruebaContext)

  const guardarDatos = (e) => {

    e.preventDefault();
    let usuario = {
      nombre: e.target.nombre.value,
      web: e.target.web.value,
      nick: e.target.nick.value,
    }

    setUsuario(usuario)
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="login" onSubmit={guardarDatos}>
        <input type="text" name="nick" placeholder="Tu nick" />
        <input type="text" name="nombre" placeholder="Tu nombre" />
        <input type="text" name="web" placeholder="Tu web" />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

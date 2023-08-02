import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import { Acerca } from "../components/Acerca";
import { Contacto } from "../components/Contacto";
import { Login } from "../components/Login";
import { PruebaContext } from "../context/PruebaContext";

export const AppRouting = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);
  return (
    <div>
      <BrowserRouter>
        <header className="header">
          {/* menu navegacion */}
          <nav>
            <div id="logo">
              <h2>Aprendiendo UseContext de React</h2>
            </div>
            <ul>
              <li>
                <NavLink to="/">inicio</NavLink>
                {/*NavLink nos mueve por la navegacion de la aplicacion */}
              </li>
              <li>
                <NavLink to="/articulo">Articulos</NavLink>
              </li>
              <li>
                <NavLink to="/acerca">Acerca De</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>

              {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                <>
                  <li>
                    <NavLink to="/">{usuario.nick}</NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setUsuario({});
                      }}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Identificate</NavLink>
                </li>
              )}

              {/* <li>
                <NavLink to="/login">{usuario.nick}</NavLink>
              </li> */}
            </ul>
          </nav>
        </header>
        <section className="content">
          {/* configuracion rutas */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/articulo" element={<Articulos />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404 Not Found</h1>
                </div>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

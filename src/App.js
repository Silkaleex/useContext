import { useEffect, useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouting } from "./routing/AppRouting";

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    //la primera vez que se carge el componente
    
    let usuario_local = JSON.parse(localStorage.getItem("usuario"))
    setUsuario(usuario_local)
  }, []);

  useEffect(() => {
    //Cada vez que se actualize el estado usuario sse guarda en el ls
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);
  // const aprendiendo = {
  //   id: 1,
  //   titulo: "Aprendiendo React",
  //   contenido: "Contenido de calidad",
  // };
  return (
    <div className="App">
      <PruebaContext.Provider value={{ usuario, setUsuario }}>
        {/*Otra manera de hacerlo   <PruebaContext.Provider value="Silkaleex"> */}
        <AppRouting />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;

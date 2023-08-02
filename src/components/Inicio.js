import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {
  // const compartido = useContext(PruebaContext)
  const {usuario,setUsuario} = useContext(PruebaContext)
  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre:{usuario.nombre} web:{usuario.web}</p>
      {/* <p>Valor Compartido: <strong>{compartido.titulo}</strong></p> */}
    </div>
  )
}

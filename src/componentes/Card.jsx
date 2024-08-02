/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ imagen, titulo, descripcion, precio,handleAgregar,handleQuitar,handleAumentar,handleDisminuir }) => {
  const [added, setAdded] = useState(false);

  const clickQuitar = () => {
    handleQuitar();
    setAdded(!added);
  };
  const clickAgregar = () => {
    handleAgregar();
    setAdded(!added);
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">${precio}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={clickQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

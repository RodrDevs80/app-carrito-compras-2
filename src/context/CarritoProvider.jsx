/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const estadoInicial = [];

// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children}) => {
 

  const comprasReducer = (state = estadoInicial, action = {}) => {
    switch (action.type) {
      case "[CARRITO] agregar compra":
        return [...state, action.payload];
      case "[CARRITO] aumentar cantidad compra":
        return state.map(item=>{
          const cant= item.cantidad +1;
          if (item.id ===action.payload) return{...item,cantidad:cant};
          return item;
        }) 
      case "[CARRITO] disminuir cantidad compra":
        return state.map(item=>{
          const cant= item.cantidad -1;
          if (item.id ===action.payload && item.cantidad > 1) return{...item,cantidad:cant};
          return item;
        }) 
      case "[CARRITO] eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);
      default:
        return state;
    }
  };

  const [listaDeCompras, dispatch] = useReducer(comprasReducer, estadoInicial);
  
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] aumentar cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[CARRITO] disminuir cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] eliminar compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaDeCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

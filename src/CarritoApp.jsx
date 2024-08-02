// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";


export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
      <Navbar />
      <div className="container"> 
          <Routes>
            <Route path="/" element={<ComprasPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>  
      </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};

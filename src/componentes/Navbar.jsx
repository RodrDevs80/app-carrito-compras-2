/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import i from '../assets/img.svg';
import '../styles/card.css'


export const Navbar = () => {
  const {listaDeCompras} = useContext(CarritoContext);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/carrito">
            <img className="imagen-compra" src={i} alt="compras" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Compras
                </NavLink>
              </li>
            </ul>
            <NavLink to="/carrito">
              <Badge badgeContent={listaDeCompras.reduce((a,item)=> a+item.cantidad,0)} color="secondary">
                <ShoppingCart color="action" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

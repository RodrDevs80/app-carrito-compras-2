import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext"


// eslint-disable-next-line react/prop-types
export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos=async ()=>{
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data= await res.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log(`Se produjo un error: ${error}`);
      }
    }
    useEffect(() => {
      fetchProductos();  
    }, [])

  return (
    <ProductosContext.Provider value={{productos}}>
     {children}
    </ProductosContext.Provider>
  )
}

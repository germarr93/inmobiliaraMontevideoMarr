//Creo el contexto
import { createContext, useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

//lo exporto para saber de cual proviene
export const CartContext = createContext();

//Se crea como capa de abstraccion y se llaman a los children
// para poder visualizar la pantalla los componantes.
const Provider = (props)=>{
    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log(cart)
    },[cart])


    const addToCart = (item,cantidad) =>
    {   //utilizo spread operator para agregar todo "junto"
        // console.log({...item,cantidad}
        // console.log('agregando al carrito')
        
        if(isInCart(item.id))
        {
            alert('Ya esta en el carrito')
        }
        else{  setCart([...cart,{...item,cantidad}])}
      
    }

    const isInCart = (id) =>
    {
        //saber si esta o no, devuelve un true or false la funcion
      return cart.some(prod => prod.id === id)
    }
   return(
     <CartContext.Provider value={{cart,addToCart}}>
        {props.children}
     </CartContext.Provider>
    )
}
export default Provider;

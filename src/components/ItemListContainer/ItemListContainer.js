import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import articulos from "../../mock/productos"

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const traerItems = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(articulos)
      }, 2000)
    }) 
  }

  useEffect(()=>{
    traerItems().then(res =>{
      setItems(res)
    })
  },[])


  return (
  <ItemList items={items} />
  )
}

export default ItemListContainer




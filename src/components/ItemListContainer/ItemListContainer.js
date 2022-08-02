import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import articulos from "../../mock/productos"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"


const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(false)
  const {categoria} = useParams()
  

  const traerItems = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
      resolve(categoria ? articulos.filter(obj => 
        obj.categoria === categoria) : articulos)
      }, 500)
    }) 
  }

  useEffect(()=>{
    traerItems().then(res =>{
      setItems(res)
    })
  },[categoria])
//se define para cuando haya solo un cambio para esa variable.

  return (
  <ItemList items={items} />
  )
}

export default ItemListContainer




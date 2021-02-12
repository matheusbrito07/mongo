import "./produtos.css"
import getapi from "../../getapi"
import {useState,useEffect} from "react"


export default function Produtos (props) {
    
    const [lista,setlista]=useState([])
    useEffect(async () =>{
        var dados=await getapi()
        setlista(dados)
        
    },[])

    return(
            <div>
               <h1>Pagina de produtos</h1> 
               {lista.map (item =>{
                   return <li> <img src={require(`../img/computadorgamer.png`).default} alt="imagemDoProduto" /> Nome: {item.item} Preço: {item.tipo} </li>

               })}
            </div>
    )
}
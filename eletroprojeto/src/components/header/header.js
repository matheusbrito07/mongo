import "./header.css"
import {Link} from "react-router-dom"
export default function Header (props) {
    return(
            <div class="main-header">
                <div class="menu-header">
                    <img class="menu-logo" src ={props.imagem} alt="xd" />
                    <div class="menu-container">
                        <Link class="menu-link" to="/home">Home</Link> 
                        <Link class="menu-link" to="/produtos">Produtos</Link>
                        <Link class="menu-link" to="/contatos">Contatos</Link>
                    </div>
                </div>
            </div>
                
    )
} 


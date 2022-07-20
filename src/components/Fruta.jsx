import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.action";



const Fruta = (props) =>{
    const dispatch = useDispatch();
    
    function remover(fruta){
       dispatch(actions.remover(fruta))
    }

    return (
        <div className="fruta">
            <ul>
                <li>
                    <strong>Fruta: </strong> {props.fruta.nome}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Quantidade</strong>{props.fruta.quantidade}
                </li>
            </ul>
            <button onClick={()=> remover(props.fruta)}>Remover</button>
        </div>
    )
}

export default Fruta
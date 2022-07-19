import React from "react";

const Fruta = (props) =>{
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
            <button onClick={()=> alert(props.fruta.id)}>Remover</button>
        </div>
    )
}

export default Fruta
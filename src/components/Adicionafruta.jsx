import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AdiconaFruta = () => {

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    const adiconarFruta= event =>{
        event.preventDefault();
debugger;
        const fruta ={
            id: uuidv4(),
            nome: nome,
            quantidade: quantidade
        };
    }

    return(
        <form onSubmit={adiconarFruta}>
            <input type="text" name={nome} placeholder="Fruta" required onChange={event => setNome(event.target.value)}/>

            <input type="text" name={quantidade} placeholder="Quantidade" required onChange={event => setQuantidade(event.target.value)}/>

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AdiconaFruta

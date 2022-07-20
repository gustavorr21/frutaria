import React from 'react'
import AdiconaFruta from './Adicionafruta'
import Fruta from './Fruta'
import {useSelector} from 'react-redux';

const ListaFrutas = () =>{

    const frutas = useSelector(state=> state.frutaReducers.frutas);


    return <>
    <h1>Lista de Frutas</h1>

    <AdiconaFruta />

    {frutas.map(fruta=>(
        <Fruta key={fruta.id} fruta={fruta}/>
    ))}
    </>
}

export default ListaFrutas
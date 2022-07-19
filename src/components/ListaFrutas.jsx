import React from 'react'
import AdiconaFruta from './Adicionafruta'
import Fruta from './Fruta'

const ListaFrutas = () =>{

    const frutas =[
        { id: 1, nome:'Abacaxi', quantidade:3 },
        { id: 2, nome:'maça', quantidade:30 }
    ]


    return <>
    <h1>Lista de Frutas</h1>

    <AdiconaFruta />

    {frutas.map(fruta=>(
        <Fruta key={fruta.id} fruta={fruta}/>
    ))}
    </>
}

export default ListaFrutas
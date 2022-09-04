import React from "react"
import { useState, useEffect } from "react"
import MediaAluno from './components/MediaAluno/MediaAluno'


export default function App(){    
    
    const[aluno, setAluno] = useState({
        nome: "Wesley",
        rm: 94412,
        turma: "1TDSS"
    })
   

    const nota1 = 5
    const nota2 = 8
    const nota3 = 10


    return(
        <>
            <h1>CP2 de RWD 2º Semestre</h1>
            <MediaAluno
                alunoProp = {aluno}
                nota1Prop = {nota1}
                nota2Prop = {nota2}
                nota3Prop = {nota3}
            />
        </>
    )
}
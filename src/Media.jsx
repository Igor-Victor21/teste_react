import style from './Media.module.css'
import { useState, useEffect } from 'react'

   


export default function Media(){
    const [n1, setN1] = useState('')    
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')    
    const [n4, setN4] = useState('')
    const [n5, setN5] = useState('')    
    const [respMedia, setRespMedia] = useState()
    
    console.log(n1,n2,n3,n4,n5)
    useEffect(() => {
        setRespMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5))/5)
    }, [n1, n2, n3, n4, n5])
    return(
        <>
        <h5><a className={style.backBtn}href="/">Voltar</a></h5>
        <div>
            <h4>Digite as notas para saber a média</h4>
            <input type="number"value={n1}onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número: ' />
            <input type="number"value={n2}onChange={(e) => setN2(e.target.value)} placeholder='Segundo número: ' />
            <input type="number"value={n3}onChange={(e) => setN3(e.target.value)} placeholder='Terceiro número: ' />
            <input type="number"value={n4}onChange={(e) => setN4(e.target.value)} placeholder='Quarto número: ' />
            <input type="number"value={n5}onChange={(e) => setN5(e.target.value)} placeholder='Quinto número: ' />
        </div>
        <div>
            <h4>Média</h4>
                <p>
                    {n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10 || n4 > 10 ? "NOTA SUPERIOR PODE NÃO " 
                    : n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0 || n5 < 0 ? "NOTA A BAIXO DE ZERO PODE NÃO " : "SUA MÉDIA É  "}
                    
                    {!isNaN(respMedia) ? respMedia : "Digite números válidos"}
                </p>
        </div>
        <br />        
        </>
    )
}

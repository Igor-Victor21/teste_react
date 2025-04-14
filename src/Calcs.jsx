import { useState, useEffect } from 'react'
import style from './Calcs.module.css'


export default function Calcs(){
    const [n1, setN1] = useState('')    
    const [n2, setN2] = useState('')
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDiv, setRespDiv] = useState()

    
    //as funções a baixo é basicamente isso que está rolando
    // const somar = () => {
    //     var res = parseFloat(n1) + parseFloat(n2)
    //     setRespSoma(resp)
    // }

    const somar = () => setRespSoma(parseFloat(n1) + parseFloat(n2))
    const sub = () => setRespSub(parseFloat(n1) - parseFloat(n2))
    const mult = () => setRespMult(parseFloat(n1) * parseFloat(n2))
    const div = () => setRespDiv(parseFloat(n1) / parseFloat(n2))

    const handleAll = (a,b) => {
        setRespSoma(parseFloat(a) + parseFloat(b))
        setRespSub(parseFloat(a) - parseFloat(b))
        setRespMult(parseFloat(a) * parseFloat(b))
        setRespDiv(parseFloat(a) / parseFloat(b))
    }
    useEffect(() => {
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespMult(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))
    }, [n1, n2])

    


        
    console.log(n1,n2)
    return(
        <>
            <h5><a className={style.backBtn}href="/">Voltar</a></h5>
            <h1>Cálculos</h1>
            <br />
            <div>
                <h4>Digite os números para os cálculos</h4>
                    <input type="number"value={n1}onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número: ' />
                    <input type="number"value={n2}onChange={(e) => setN2(e.target.value)} placeholder='Segundo número: ' />
            </div>
            <div>
                <h4>Resposta</h4>
                <p>
                    <button onClick={somar}>Somar</button>
                    {!isNaN(respSoma) ? respSoma : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={sub}>Sub</button>
                    {!isNaN(respSub) ? respSub : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={mult}>Mult</button>
                    {!isNaN(respMult) ? respMult : "Digite números válidos"}
                </p>
                <p>
                    <button onClick={div}>Div</button>
                    {n2 === "0" ? "Erro ao dividir por zero"
                     : !isNaN(respDiv) && isFinite(respDiv) ? respDiv 
                     : "Digite números válidos"}
                </p>
                <br />
                <button onClick={() => handleAll(n1,n2)}>Cálcular todas</button>
            </div>
        </>
    )
}
import { useState } from 'react'
import style from './Imc.module.css'

export default function Imc(){
        const [a, setA] = useState('')    
        const [p, setP] = useState('')
        const [respImc, setRespImc] = useState()

        const handleAll = (p,a) => {
            setRespImc(parseFloat(p)/(parseFloat(a)*parseFloat(a)))
        }
        
        console.log(p,a)    
    return(
        <>
        <h5><a className={style.backBtn}href="/">Voltar</a></h5>
        <div>
        <h4>Digite o seu peso e altura para saber seu IMC</h4>
                <input type="number"value={p}onChange={(e) => setP(e.target.value)} placeholder='Informe o seu peso: ' />
                <input type="number"value={a}onChange={(e) => setA(e.target.value)} placeholder='Informe sua altura: ' />
            </div>
            <div>
                <p>
                    {!isNaN(respImc) ? respImc : "Digite números válidos"}
                    {respImc > 40.0 ? " Obesidade grau III" 
                    : respImc > 35.0 && respImc < 39.9 ? " Obesidade grau II"
                    : respImc > 30.0 && respImc < 34.9 ? " Obsesidade grau I"
                    : respImc > 25.0 && respImc < 29.9 ? " Sobrepeso"
                    : respImc > 18.6 && respImc < 24.9 ? " Normal"
                    : " Abaixo do normal"}
                </p>
                <br />
                <button onClick={() => handleAll(p,a)}>Cálcular Imc</button>
            </div>
        </>
    )
}
import style from './Imc.module.css'

export default function Imc(){
        const [p, setA] = useState('')    
        const [a, setP] = useState('')
        const [respImc, setRespImc] = useState()

        const handleAll = (p,a) => {
            setRespImc(parseFloat(p)/(parseFloat(a)*parseFloat(a)))
        }
        <div>
        <h4>Digite o seu peso e altura para saber seu IMC</h4>
                    <input type="number"value={p}onChange={(e) => setP(e.target.value)} placeholder='Informe o seu peso: ' />
                    <input type="number"value={a}onChange={(e) => setA(e.target.value)} placeholder='Informe sua altura: ' />
            </div>
            
            
    return(
        <>
        
        </>
    )
}
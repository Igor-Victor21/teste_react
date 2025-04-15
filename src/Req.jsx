import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { apiRick } from './api/api'
import { Card } from './components/card'

export default function Req(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName,setSearchName] = useState("")
    
    const [erro, setErro] = useState(false)

    useEffect(() => {
        apiRick.get(`/character/?page=${page}&name=${searchName}`).then((response) =>{
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === 404){
            setErro(true)
            }
            console.error(error)
        })
    }, [page, searchName])

    console.log(data)
    return(
        
        <section className={style.wrapPage}>
            <h1 className={style.tittleName}>Rick and Morty API</h1>
            {erro && <p>Página não encontrada</p>}
            <input className={style.input} type="text" placeholder='Digite uma página (1 / 42)' value={page} onChange={(e) => setPage(e.target.value)}/>

            <input className={style.input} type="text" placeholder='Digite um nome' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                <div className={style.wrapCards}>
            {data.map((item, index) => {
                return(
                    <div key={index}>
                       <Card name={item.name} image={item.image}/>
                    </div>
                )
            })}
                </div>
        </section>
        
    )
}

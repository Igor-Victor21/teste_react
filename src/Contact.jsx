import style from './Contact.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from './components/menu';
import { Loading } from './components/spinner';
import { useEffect, useState } from 'react';


function Contact() {
    const [cep, setCep] = useState("80510-070")
    const [lat, setLat] = useState("-25.4248289")
    const [lng, setLng] = useState("-49.3548061")
    const [loading, setLoading] = useState(false)
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [localidade, setLocalidade] = useState("")

    function handleCep(e) {
        setCep(e.target.value)

    }

    function ChangeView({ center }) {
        const map = useMap();
        map.setView(center, 15)
        return null;
    }

    useEffect(() => {
        const sanitizedCep = cep.replace(/\D/g, "")

        if (sanitizedCep.length !== 8) return;

        setLoading(true)

        fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`)
            .then((res) => res.json())
            .then((data) => {

                if (data.erro) {
                    console.warn("CEP não encontrado")
                    setLoading(false)
                    return
                }

                const { logradouro, localidade, uf, bairro, estado } = data;
                setBairro(bairro)
                setRua(logradouro)
                setEstado(estado)
                setLocalidade(localidade)
                const address = `${logradouro ? logradouro + ', ' : `${localidade}, ${uf}`}`

                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
                    .then((response) => response.json())
                    .then((LocationData) =>{
                            if(LocationData.length > 0){
                                const {lat, lon} = LocationData[0]
                                setLat(parseFloat(lat))
                                setLng(parseFloat(lon))
                            }else{
                                console.log("coordenadas não encontradas")
                            }
                        setLoading(false)
                    })






                setLoading(false)

                //código lazarento
            }).catch(error => {
                console.error("erro ao buscar CEP", error)
                setLoading(false)
            })
    }, [cep])

    const position = [lat, lng]

    return (
        <>
            <Menu option01='Volta a página principal' />
            <h2 className={style.tt}>contato</h2>
            <br />
            <input type="text" placeholder="Insira o CEP:" onChange={handleCep} />
            {bairro} - {rua} - {estado} - {localidade}
            <br />
            <br />
            {loading ? <Loading /> :
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "auto", minHeight: "900px" }}>
                    <ChangeView center={position} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1$query=${lat},${lng}`}>Abrir no Google Maps</a>
                        </Popup>
                    </Marker>
                </MapContainer>
            }



        </>
    )
}

export default Contact
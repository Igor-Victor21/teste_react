import style from './Contact.module.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from './components/menu';
function Contact(){
    const position = [51.505, -0.09]

    return(
        <>
        <Menu option01='Volta a página principal'/>
        <h2 className={style.tt}>contato</h2>
        <br />
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "auto", minHeight: "900px"}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
        </MapContainer>
        </>
    )
}

export default Contact
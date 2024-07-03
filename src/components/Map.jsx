import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

const Map = () => {
    return (
        <div className='w-full h-80 border border-black'>
            <MapContainer center={[39.57, -0.33]} zoom={8} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[39.57, -0.33]}>
                    <Popup>
                        {'Here I am :)'}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map

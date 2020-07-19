import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const LeafletMap = ({ details: { location, warehouseDetails } }) => (
    <Map center={[location.lat, location.long]} zoom={16}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.long]} title={warehouseDetails.name}/>
    </Map>
)

export default LeafletMap

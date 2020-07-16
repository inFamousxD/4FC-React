import React, { Component } from 'react'
import warehouseImage from '../../image/warehouse_placeholder1.jpg'

export class Image extends Component {
    render() {
        return (
            <img height='420px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
        )}
}

export default Image

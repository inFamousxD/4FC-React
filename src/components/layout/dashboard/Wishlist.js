import React, { Fragment } from 'react';

const Wishlist = ({ wishlist }) => {
    const warehouses = wishlist.map((id, index) => (
        <li key={index}>{id}</li>
    ))
    return (
        <Fragment>
            <ul>
                {warehouses}
            </ul>
        </Fragment>
    )
}

export default Wishlist

import React from 'react';

function ClientItem({ image, details, name, job }) {
    return (
        <div className='client-item'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <p className='details'> {details} </p>
            <h1 className='name'> {name} </h1>
            <span className='job'> {job} </span>
        </div>
    )
}

export default ClientItem;
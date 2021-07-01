import React from 'react';
import {ClientList} from '../database/DadosClients';
import ClientItem from './ClientsItem';
import '../styles/clients.css'

function Client () {
    return (
        <div className='clients'>
            <h1 className='title'>CLIENT TESTIMONIALS</h1>
            <div className='client-box'>
                {ClientList.map((item, key)=>{
                    return (
                        <ClientItem key={key} image={item.image} details={item.details} name={item.name} job={item.job} />
                    )
                })}

            </div>
        </div>
    )
}

export default Client;
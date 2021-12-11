import React from 'react'
import { useParams } from 'react-router-dom'

function Invoice() {

    const params = useParams();

    return (
        <div>
            <h1>Individual Invoice {params.invoiceId}</h1>
        </div>
    )
}

export default Invoice

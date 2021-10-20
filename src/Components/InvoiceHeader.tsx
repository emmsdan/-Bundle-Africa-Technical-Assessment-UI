import React from 'react'
import './invoice-header.scss'
export default function InvoiceHeader() {
    const randomId = String(Math.random() + 2).split('.')[1]
    return <header>
        <div className={'logo'}>
            BundleAfrica
            <span>technical assessment</span>
        </div>
        <div className={'about'}>
            Voucher
            <span>invoice id: {randomId}</span>
        </div>
    </header>
}

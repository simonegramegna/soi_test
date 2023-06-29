import React from "react"
import { AlertTriangle } from "react-feather"

export const Toast = ({ opt }) => {

    return (
        <div className={'toastify toastify-right toastify-top '+(opt.isVisible ? 'on' : '')}>
            <div className='toastify-content flex text-danger'>
                <AlertTriangle className="text-danger" />
                <div className="ml-4 mr-4">
                    <div className="font-bold">Oh...Oh! Attention!</div>
                    <div className="text-slate-500 mt-1 text-danger">We encounter the following errors:</div>
                    <ul>
                        {
                            opt.errors.map((e,k) => <li key={k} className="ml-2 h-3 list-disc"><small><strong>{e}</strong></small></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import { useDispatch } from "react-redux"
import { setModalOpt } from "../../features/controlsSlice"

export const Modal = ({ opt }) => {

    const dispatch = useDispatch()
    
    const closeModal = () => {
        dispatch(setModalOpt({isVisible:false,imgSrc:''}))
    }

    return (
        <div className={'modal overflow-y-auto ' + (opt.isVisible ? 'show' : '')} onClick={closeModal}>
            <div className={'modal-dialog modal-'+opt.size}>
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <img alt='cfu test' className="rounded-md" src={opt.imgSrc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
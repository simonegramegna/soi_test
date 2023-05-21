import React from 'react'
import { Progress } from './Progress'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, getModalOpt, setCurrentStep } from '../../features/controlsSlice'
import { Modal } from '../utils/Modal'
import { soi_tests } from '../../config/soi_tests'

export const SoiTestContainer = () => {

    const dispatch = useDispatch()
    const modalOpt = useSelector(getModalOpt)
    const currentStep = useSelector(getCurrentStep)

    const goNext = () => {
        const trail = Object.keys(soi_tests)
        const index = trail.indexOf(currentStep)
        if(index >= 0 && index < trail.length - 1){
            dispatch(setCurrentStep(trail[index+1]))
        }
    }

    const goPrevious = () => {
        const trail = Object.keys(soi_tests)
        const index = trail.indexOf(currentStep)
        if(index > 0 && index <= trail.length - 1){
            dispatch(setCurrentStep(trail[index-1]))
        }
    }

    return (
        <>
        <div className="intro-y box py-10 sm:py-20 mt-5">
            <Progress />
            <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                    {
                        soi_tests[currentStep].component
                    }
                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                        <button
                            type='button'
                            className='btn btn-secondary w-24'
                            onClick={goPrevious}
                        >Previous</button>
                        <button
                            type='button'
                            className='btn btn-primary w-24 ml-2'
                            onClick={goNext}
                        >Next</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal opt={modalOpt} />
        </>
    )
}
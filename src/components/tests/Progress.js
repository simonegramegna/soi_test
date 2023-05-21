import React from 'react'
import { soi_tests } from '../../config/soi_tests'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, setCurrentStep } from '../../features/controlsSlice'

export const Progress = () => {

    const dispatch = useDispatch()
    const currentStep = useSelector(getCurrentStep)

    return (
        <>
        <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
            {
                Object.keys(soi_tests).map((k,i) => {
                    return (
                        <div key={i} className="intro-x lg:text-center flex items-center mt-5 lg:mt-0  lg:block flex-1 z-10">
                            <button type='button' className={'w-10 h-10 rounded-full btn '+(k === currentStep ? 'btn-primary' : 'text-slate-500 bg-slate-100')} onClick={() => dispatch(setCurrentStep(k))}>{i+1}</button>
                            <div className={'lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto '+(k === currentStep ? 'font-medium' : 'text-slate-600')}>{k.toUpperCase()}</div>
                        </div>
                    )
                })
            }
        </div>
        <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] flex flex-col lg:flex-row justify-center p-5 mt-5 sm:px-20">
            <p>{soi_tests[currentStep].description}</p>
        </div>
        </>
    )
}
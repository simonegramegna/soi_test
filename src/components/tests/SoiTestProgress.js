import React from 'react'
import { get_tests_sequence } from '../../config/soi_tests'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, setCurrentStep } from '../../features/controlsSlice'
import { useParams } from 'react-router-dom'

export const SoiTestProgress = () => {

    const dispatch = useDispatch()
    const currentStep = useSelector(getCurrentStep)
    const { test_id } = useParams()
    const tests_seq = get_tests_sequence(test_id)

    return (
        <>
        <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
            {
                Object.keys(tests_seq).map((k,i) => {
                    return ((currentStep === '') ? 
                        <div key={i} className="intro-x lg:text-center flex items-center mt-5 lg:mt-0  lg:block flex-1 z-10">
                            <button type='button' className={'w-10 h-10 rounded-full btn '+(k === Object.keys(tests_seq)[0] ? 'btn-primary' : 'text-slate-500 bg-slate-100')} onClick={() => dispatch(setCurrentStep(k))}>{i+1}</button>
                            <div className={'lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto '+(k === Object.keys(tests_seq)[0] ? 'font-medium' : 'text-slate-600')}>{k.toUpperCase()}</div>
                        </div> : 
                        <div key={i} className="intro-x lg:text-center flex items-center mt-5 lg:mt-0  lg:block flex-1 z-10">
                            <button type='button' className={'w-10 h-10 rounded-full btn '+(k === currentStep ? 'btn-primary' : 'text-slate-500 bg-slate-100')} onClick={() => dispatch(setCurrentStep(k))}>{i+1}</button>
                            <div className={'lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto '+(k === currentStep ? 'font-medium' : 'text-slate-600')}>{k.toUpperCase()}</div>
                        </div>
                    )
                })
            }
        </div>
        <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] flex flex-col lg:flex-row justify-center p-5 mt-5 sm:px-20">
            <p>{currentStep === '' ? tests_seq[Object.keys(tests_seq)[0]].description : tests_seq[currentStep].description}</p>
        </div>
        </>
    )
}
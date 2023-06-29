import React from 'react'
import { SoiTestProgress } from './SoiTestProgress'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentStep, getModalOpt, getToastOpt, setCurrentStep, setToastOpt } from '../../features/controlsSlice'
import { Modal } from '../utils/Modal'
import { useParams } from 'react-router-dom'
import { get_tests_sequence } from '../../config/soi_tests'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { getAllAnswers, setResult } from '../../features/soiSlice'
import { Toast } from '../utils/Toast'

export const SoiTestContainer = () => {

    const dispatch = useDispatch()
    const modalOpt = useSelector(getModalOpt)
    const toastOpt = useSelector(getToastOpt)
    const currentStep = useSelector(getCurrentStep)
    const { test_id } = useParams()
    const tests_seq = get_tests_sequence(test_id)
    const allAnswers = useSelector(getAllAnswers)

    const goNext = () => {
        const trail = Object.keys(tests_seq)
        const index = trail.indexOf(currentStep === '' ? Object.keys(tests_seq)[0] : currentStep)
        if(index >= 0 && index < trail.length - 1 && validateTest() === 0){
            dispatch(setCurrentStep(trail[index+1]))
        }
    }

    const goPrevious = () => {
        const trail = Object.keys(tests_seq)
        const index = trail.indexOf(currentStep === '' ? Object.keys(tests_seq)[0] : currentStep)
        if(index > 0 && index <= trail.length - 1 && validateTest() === 0){
            dispatch(setCurrentStep(trail[index-1]))
        }
    }

    const submitAnswers = async () => {
        if (validateTest() === 0) {
            const session = window.pl.create()
            session.consult('/prolog/compiled.pl', {
                success: function() {
                    console.log('Program loaded correctly')
                    const goal = 'get_result(['+allAnswers[Object.keys(tests_seq)[0]]+'], '+Object.keys(tests_seq)[0]+', Score).'
                    console.log(goal)
                    session.query(goal, {
                        success: function(goal) {
                            console.log('success query')
                            console.log({goal})
                            session.answer({
                                success: function(a) {
                                    const answer = a.links.Score.value
                                    console.log('success answer', answer)
                                    dispatch(setResult(answer))
                                    window.location.replace('/start-test/result')
                                },
                                fail: function() { /* No more answers */ },
                                error: function(err) { console.log(`answer error: ${err}`) },
                                limit: function() { /* Limit exceeded */ }
                            })
                        },
                        error: function(err) { console.log({err}) }
                    })
                },
                error: function(err) { console.log({err}) }
            })
    
        }
    }

    const validateTest = () => {
        let errors = []
        const currenTest = (currentStep === '') ? Object.keys(tests_seq)[0] : currentStep
        if (currenTest !== 'cfu') {
            const arrayToCheck = Object.values(allAnswers[currenTest])
            arrayToCheck.filter(i => i !== '').forEach(e => {
                if (!(/^\d+$/.test(e.split('-').join('')))) {
                    errors.push('Characters non valid. Enter only numbers.')
                }
            })
            errors = [...new Set(errors)]
            if (errors.length) {
                dispatch(setToastOpt({isVisible:true,errors}))
            } else {
                dispatch(setToastOpt({isVisible:false,errors:[]}))            
            }    
        }
        return errors.length
    }

    return (
        <>
        <div className="intro-y box py-10 sm:py-20 mt-5">
            <SoiTestProgress validateTest={validateTest} />
            <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                    {
                        (currentStep === '') ? tests_seq[Object.keys(tests_seq)[0]].component : tests_seq[currentStep].component
                    }
                    <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                        {
                            currentStep !== '' && currentStep !== Object.keys(tests_seq)[0] ?               <button
                                type='button'
                                className='btn btn-secondary w-28'
                                onClick={goPrevious}
                            ><ArrowLeft /> Previous</button> : null
                        }
                        {
                            currentStep === Object.keys(tests_seq)[Object.keys(tests_seq).length-1] || Object.keys(tests_seq).length === 1 ? 
                            <button
                                type='button'
                                className='btn btn-primary w-28 ml-2'
                                onClick={submitAnswers}
                            >Submit answers <ArrowRight /></button> :
                            <button
                                type='button'
                                className='btn btn-primary w-28 ml-2'
                                onClick={goNext}
                            >Next <ArrowRight /></button>
                        }
                    </div>
                </div>
            </div>
        </div>
        <Modal opt={modalOpt} />
        <Toast opt={toastOpt} />
        </>
    )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNstAnswers, setNstAnswers } from '../../../features/soiSlice'
import '../css/test.css'

export const Nst = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getNstAnswers)

    const part1 = {
        '1': ['DOG', 'THEMANANDTHEDOGGOTOTHESTORE'],
        '2': ['SAW', 'THEGIRLSAWITWHEREITWAS'],
        '3': ['MANY', 'THEMANHASMANYDOGSANDCATS'],
        '4': ['CAME', 'SHEANDHECAMETOTHEGAME'],
        '5': ['LINE', 'THENINEDOGSSTOODINALINE'],
        '6': ['GOOD', 'THEBOYWILLGOONTOAGOODPLACE']
    }

    const manageOnChange = (e, answers, max_len) => {
        let seq = e.target.value
        if (((seq.length - (seq.split('-').length - 1)) % 2 === 0) && (seq.split('-').length !== max_len)) {
            seq = seq + '-'
            dispatch(setNstAnswers({aNumber:answers,aValue:seq}))
        } else if (seq.split('-').join('').length <= max_len*2) {
            dispatch(setNstAnswers({aNumber:answers,aValue:seq}))
        }
    }

    const manageKeyDown = (e, answers) => {
        const key = e.keyCode || e.charCode
        if ( key == 8 || key == 46 ) {
            dispatch(setNstAnswers({aNumber:answers,aValue:''}))
        }
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">Did you find the word here?</div>
        <div className="text-base col-span-12">See the word in the small box; find the same word in the long box.</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: when you find the word, write the letters numbers in the input box. Write only number, no letters, no spaces.</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">    
            {
                Object.keys(part1).map(k => {
                    return (
                        <div key={k} className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-3">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block pt-5 mt-5 text-center target-word-container h-32 w-full">
                                        <p className='target-word underline'>{part1[k][0]}</p>
                                    </div>
                                    <div className="block font-medium text-center truncate mt-3 absolute bottom-0 left-0 right-0 p-3">
                                        <input
                                            type='text'
                                            name={'nst_answer_'+k}
                                            id={'nst_answer_'+k}
                                            className='form-control text-center'
                                            value={answers[k]}
                                            placeholder={part1[k][0].length === 3 ? '__/__/__' : '__/__/__/__'}
                                            onChange={(e) => manageOnChange(e, k, part1[k][0].length)}
                                            onKeyDown={(e) => manageKeyDown(e, k)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-9">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block pt-5 mt-5 text-center target-word-container h-32 w-full">
                                        <p className='target-word'>{
                                            part1[k][1].split('').map((c,i) => {
                                                return <span key={i}>{c}<span className='word-index'>{i < 9 ? '0'+(i+1) : (i+1)}</span></span>
                                            })
                                        }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMssAnswers, setMssAnswers } from '../../../features/soiSlice'
import { getRandomGeneratorMss, setRandomGeneratorMss } from '../../../features/controlsSlice'

export const Mss = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getMssAnswers)
    const gen = useSelector(getRandomGeneratorMss)

    const manageOnClick = (id_answer, n_numbers) => {
        const seq = []
        Array.from(Array(n_numbers).keys()).forEach(n => {
            seq.push(Math.floor(Math.random() * 9) + 1)
        })
        dispatch(setRandomGeneratorMss({aNumber:id_answer, aValue: {visibility: 'hidden'}}))
        dispatch(setRandomGeneratorMss({aNumber:id_answer, aValue: {sequence: seq.join('')}}))
        setTimeout(() => {
            dispatch(setRandomGeneratorMss({aNumber:id_answer, aValue: {visibility: 'block'}}))
            clearInterval(refreshIntervalId)
        },[3000])
        let counter = 0
        let refreshIntervalId = setInterval(() => {
            dispatch(setRandomGeneratorMss({aNumber:id_answer, aValue: {progressWidth: (100 - counter)+'%'}}))
            counter++
        }, 30)
    }
    
    const manageOnChange = (e, answers, max_len) => {
        let seq = e.target.value
        if (((seq.length - (seq.split('-').length - 1)) % 1 === 0) && (seq.split('-').length !== max_len)) {
            seq = seq + '-'
            dispatch(setMssAnswers({aNumber:answers,aValue:seq}))
        } else if (seq.split('-').join('').length <= max_len) {
            dispatch(setMssAnswers({aNumber:answers,aValue:seq}))
        }
    }

    const manageKeyDown = (e, answers) => {
        const key = e.keyCode || e.charCode
        if ( key === 8 || key === 46 ) {
            dispatch(setMssAnswers({aNumber:answers,aValue:''}))
        }
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">This is a remembering game!</div>
        <div className="text-base col-span-12">Now we are going to play a remembering game that is a little different. I will show you some numbers for only 3 seconds, you try to memorize them, and then to write them down in the input box only in REVERSE order.</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: every time you click you will see differents numbers, write the last numbers you have seen. Remember: write numbers in REVERSE order (e.g. if you see 369 you will write 963).</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">
            {
                Object.keys(gen).map(k => {
                    return (
                        <div key={k} className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block text-center h-24 p-3">
                                        <button
                                            type='button'
                                            className={'btn btn-lg btn-primary w-full h-full '+gen[k].visibility}
                                            onClick={() => manageOnClick(k, gen[k].maxLength)}
                                        >Show numbers</button>
                                        <p className={'target-word mt-5 '+(gen[k].visibility === 'block' ? 'hidden' : 'block')}>{gen[k].sequence}</p>
                                        <div className={'progress h-1 relative bottom--30 '+(gen[k].visibility === 'block' ? 'hidden' : 'block')}>
                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: gen[k].progressWidth}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-8">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block text-center h-24">
                                        <div className="block font-medium text-center truncate absolute bottom-0 left-0 right-0 p-3 h-full">
                                            <input
                                                type='text'
                                                name={'msu_answer_'+k}
                                                id={'msu_answer_'+k}
                                                className='form-control h-full text-4xl text-center'
                                                value={answers[k]}
                                                placeholder={gen[k].maxLength === 3 ? '__/__/__' : (gen[k].maxLength === 4 ? '__/__/__/__' : '__/__/__/__/__')}
                                                onChange={(e) => manageOnChange(e, k, gen[k].maxLength)}
                                                onKeyDown={(e) => manageKeyDown(e, k)}
                                            />
                                        </div>
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
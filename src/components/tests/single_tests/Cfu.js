import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCfuAnswers, setCfuAnswers } from '../../../features/soiSlice'
import { setModalOpt } from '../../../features/controlsSlice'

export const Cfu = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getCfuAnswers)

    const openLightbox = (src, size) => {
        dispatch(setModalOpt({isVisible:true,size,imgSrc:src}))
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">What is it?</div>
        <div className="text-base col-span-12">Under each picture write what is it?</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: click on images to enlarge.</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">
                <div className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                    {
                        Object.keys(answers).map(k => {
                            return (
                                <div key={k} className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3">
                                    <div className="box rounded-md p-3 relative zoom-in">
                                        <div className="flex-none relative block before:block before:w-full before:pt-[100%]" onClick={() => openLightbox('/images/tests/cfu/cfu_'+k+'.jpg','lg')}>
                                            <div className="absolute top-0 left-0 w-full h-full image-fit">
                                                <img alt={'cfu test '+k} className="rounded-md" src={'/images/tests/cfu/cfu_'+k+'.jpg'}/>
                                            </div>
                                        </div>
                                        <div className="block font-medium text-center truncate mt-3">
                                            <input
                                                type='text'
                                                name={'cfu_answer_'+k}
                                                id={'cfu_answer_'+k}
                                                className='form-control'
                                                value={answers[k]}
                                                placeholder='Write here...'
                                                onChange={(e) => dispatch(setCfuAnswers({aNumber:k,aValue:e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )

}
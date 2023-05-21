import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCfcAnswers, setCfcAnswers } from '../../../features/soiSlice'
import { setModalOpt } from '../../../features/controlsSlice'

export const Cfc = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getCfcAnswers)

    const openLightbox = (src, size) => {
        dispatch(setModalOpt({isVisible:true,size,imgSrc:src}))
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">Identify the class!</div>
        <div className="text-base col-span-12">In this test identify the class to which a figure belongs.</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: click on images to enlarge. Enter only the group number (i.e. 1, 2, 3). Each element belongs to one group only.</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">
                <div className="grid grid-cols-8 gap-5 mt-5 pt-5 border-t">
                    {
                        Object.keys(answers).map(k => {
                            return (
                                <div key={k} className="intro-y block col-span-4 sm:col-span-4 xl:col-span-1">
                                    <div className="box rounded-md p-3 relative zoom-in">
                                        <div className="flex-none relative block before:block before:w-full before:pt-[100%]" onClick={() => openLightbox('/images/tests/cfc/cfc_'+k+'.svg','')}>
                                            <div className="absolute top-0 left-0 w-full h-full image-fit">
                                                <img alt={'cfc test '+k} className="rounded-md" src={'/images/tests/cfc/cfc_'+k+'.svg'}/>
                                            </div>
                                        </div>
                                        <div className="block font-medium text-center truncate mt-3">
                                            <input
                                                type='text'
                                                name={'cfc_answer_'+k}
                                                id={'cfc_answer_'+k}
                                                className='form-control'
                                                value={answers[k]}
                                                placeholder='Class nr.'
                                                onChange={(e) => dispatch(setCfcAnswers({aNumber:k,aValue:e.target.value}))}
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
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">
                <div className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                    {
                        Object.keys(answers).map(k => {
                            return (
                                <div key={k} className="intro-y block col-span-6 sm:col-span-6 2xl:col-span-4">
                                    <div className="box rounded-md p-3 relative zoom-in">
                                        <div className="flex-none relative block before:block before:w-full before:pt-[100%]" onClick={() => openLightbox('/images/tests/cfc/cfc_target_'+k+'.svg','xl')}>
                                            <div className="absolute top-0 left-0 w-full h-full image-fit">
                                                <img alt={'cfc target test '+k} className="rounded-md object-contain" src={'/images/tests/cfc/cfc_target_'+k+'.svg'}/>
                                            </div>
                                        </div>
                                        <div className="block font-medium text-center truncate mt-3">{'Class: '+k}</div>
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
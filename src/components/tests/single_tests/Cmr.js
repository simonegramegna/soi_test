import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCmrAnswers, setCmrAnswers } from '../../../features/soiSlice'
import { setModalOpt } from '../../../features/controlsSlice'

export const Cmr = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getCmrAnswers)

    const openLightbox = (src, size) => {
        dispatch(setModalOpt({isVisible:true,size,imgSrc:src}))
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">What comes between?</div>
        <div className="text-base col-span-12">This time you choose something that comes in between two other things.</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: click on images to enlarge. Enter the number of the corresponding figure (i.e. 1, 2, 3). Each element corresponds to one figure only. Each answers must respond to "What comes in between?"</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">
                <div className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                    {
                        Object.keys(answers).map(k => {
                            return (
                                <>
                                <div key={k} className="intro-y block col-span-12 sm:col-span-6 lg:col-span-3">
                                    <div className="box rounded-md p-3 relative zoom-in">
                                        <div className="flex-none relative block h-64" onClick={() => openLightbox('/images/tests/cmr/cmr_'+k+'.jpg','')}>
                                            <div className="absolute top-0 left-0 w-full h-64 image-fit">
                                                <img alt={'cmr test '+k} className="rounded-md object-contain" src={'/images/tests/cmr/cmr_'+k+'.jpg'}/>
                                            </div>
                                        </div>
                                        <div className="block font-medium text-center truncate mt-3 absolute bottom-0 left-0 right-0 p-3">
                                            <input
                                                type='text'
                                                name={'cmr_answer_'+k}
                                                id={'cmr_answer_'+k}
                                                className='form-control'
                                                value={answers[k]}
                                                placeholder='Fig. nr.'
                                                onChange={(e) => dispatch(setCmrAnswers({aNumber:k,aValue:e.target.value}))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-9">
                                    <div className="box rounded-md p-3 relative zoom-in">
                                        <div className="flex-none relative block h-64" onClick={() => openLightbox('/images/tests/cmr/cmr_target_'+k+'.jpg','xl')}>
                                            <div className="absolute top-0 left-0 w-full h-64 image-fit">
                                                <img alt={'cmr target test '+k} className="rounded-md object-contain" src={'/images/tests/cmr/cmr_target_'+k+'.jpg'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )

}
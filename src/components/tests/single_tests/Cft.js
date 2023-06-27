import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCftAnswers, setCftAnswers } from '../../../features/soiSlice'
import { setModalOpt } from '../../../features/controlsSlice'

export const Cft = () => {

    const dispatch = useDispatch()
    const answers = useSelector(getCftAnswers)

    const openLightbox = (src, size) => {
        dispatch(setModalOpt({isVisible:true,size,imgSrc:src}))
    }

    return (
        <>
        <div className="font-medium text-base col-span-12">Recognize the figure!</div>
        <div className="text-base col-span-12">This time you will have to figure out what something will look like after it has been turned.</div>
        <div className="alert alert-secondary show my-2 col-span-12" role="alert"><strong>Tips</strong>: click on images to enlarge. Enter the number of the corresponding figure (i.e. 1, 2, 3). Each element corresponds to one and only one figure.</div>
        <div className="intro-y grid grid-cols-12 gap-5 mt-5 col-span-12">
            <div className="intro-y col-span-12">    
            {
                Object.keys(answers).map(k => {
                    return (
                        <div key={k} className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-3">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block h-64" onClick={() => openLightbox('/images/tests/cft/cft_'+k+'.svg','')}>
                                        <div className="absolute top-0 left-0 w-full h-64 image-fit">
                                            <img alt={'cft test '+k} className="rounded-md" src={'/images/tests/cft/cft_'+k+'.svg'}/>
                                        </div>
                                    </div>
                                    <div className="block font-medium text-center truncate mt-3 absolute bottom-0 left-0 right-0 p-3">
                                        <input
                                            type='text'
                                            name={'cft_answer_'+k}
                                            id={'cft_answer_'+k}
                                            className='form-control'
                                            value={answers[k]}
                                            placeholder='Fig. nr.'
                                            onChange={(e) => dispatch(setCftAnswers({aNumber:k,aValue:e.target.value}))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="intro-y block col-span-12 sm:col-span-6 lg:col-span-9">
                                <div className="box rounded-md p-3 relative zoom-in">
                                    <div className="flex-none relative block h-64" onClick={() => openLightbox('/images/tests/cft/cft_target_'+k+'.svg','xl')}>
                                        <div className="absolute top-0 left-0 w-full h-64 image-fit">
                                            <img alt={'cft target test '+k} className="rounded-md object-contain" src={'/images/tests/cft/cft_target_'+k+'.svg'}/>
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
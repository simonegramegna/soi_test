import { ArrowRight } from "react-feather"
import { NavLink } from "react-router-dom"
import { Tooltip } from 'react-tooltip'
import { soi_abilities } from "../../config/soi_tests"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCurrentStep } from "../../features/controlsSlice"

export const SoiTestSelector = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentStep(''))
    },[dispatch])

    return (
        <>
        <div className="intro-y flex items-center h-10 mt-5">
            <h2 className="text-lg font-medium truncate mr-5">
                Choose a SOI ability to test!
            </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 sm:col-span-12 xl:col-span-3 intro-y"></div>
            <div className="col-span-6 sm:col-span-12 xl:col-span-6 intro-y">
                <div className="p-3">
                    <img width='500' src='/images/soi-cube.svg' alt='SOI Cube' className='w-full' />
                </div>
            </div>
            <div className="col-span-3 sm:col-span-12 xl:col-span-3 intro-y"></div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-5">
            {
                Object.keys(soi_abilities).map((face, i) => {
                    return (
                        <div key={i} className="col-span-12 xl:col-span-4 mt-6">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    {face.toUpperCase()}
                                </h2>
                            </div>
                            <div className="mt-5">
                                {
                                    Object.keys(soi_abilities[face]).map((abil, k) => {
                                        return (
                                            (soi_abilities[face][abil].length) > 0 ? 
                                            <NavLink to={'/start-test/'+abil} key={k} >
                                                <div className="intro-y">
                                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                                        <div className="ml-4 mr-auto">
                                                            <div className="font-medium">{abil.replace('-',' ').charAt(0).toUpperCase() + abil.replace('-',' ').slice(1)}</div>
                                                            <div className="text-slate-500 text-xs mt-0.5">{soi_abilities[face][abil].length + (soi_abilities[face][abil].length === 1 ? ' Test' : ' Tests')}</div>
                                                        </div>
                                                        <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium"><ArrowRight /></div>
                                                    </div>
                                                </div>
                                            </NavLink> :
                                            <div key={k} className="intro-y cursor-no-drop" data-tooltip-id="not-avl" data-tooltip-content="Tests not available!">
                                                <div className="box px-4 py-4 mb-3 flex items-center">
                                                    <div className="ml-4 mr-auto">
                                                        <div className="font-medium opacity-50">{abil.charAt(0).toUpperCase() + abil.slice(1)}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <Tooltip id="not-avl" />
        </>
    )
}
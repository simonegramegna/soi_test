import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getResult, setResult } from "../../features/soiSlice"
import { NavLink } from "react-router-dom"
import { RefreshCcw } from "react-feather"

export const SoiTestResult = () => {

    const dispatch = useDispatch()
    const result = useSelector(getResult)

    useEffect(() => {
        const session = window.pl.create()
            session.consult('/prolog/compiled.pl', {
                success: function() {
                    const goal = 'get_avg_result('+result.test_id+','+result.score+', Score).'
                    session.query(goal, {
                        success: function(goal) {
                            session.answer({
                                success: function(a) {
                                    const score = a.links.Score.value
                                    dispatch(setResult({avg: score === 0 ? 'weakness' : (score === 2 ? 'strength' : 'average')}))
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
    },[dispatch, result])

    return (
        <div className="col-span-12 xl:col-span-9 mt-8">
            <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                    Test Report
                </h2>
                <NavLink to={'/start-test'} className='ml-auto flex items-center text-primary btn btn-outline-primary'><RefreshCcw className="w-4 h-4 mr-3" /> Start new test</NavLink>
            </div>
            <div className="report-box-2 intro-y mt-5">
                <div className="box grid grid-cols-12">
                    {
                        result.score !== '' ?
                        <div className="col-span-12 lg:col-span-12 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 border-dashed">
                            <ul className=" nav nav-pills w-60 border border-slate-300 border-dashed rounded-md mx-auto p-1 mb-8 " role="tablist">
                                <li id="score-report-tab" className="nav-item flex-1" role="presentation">
                                    <button className="nav-link w-full py-1.5 px-2 active" type="button" role="tab"> Results </button>
                                </li>
                            </ul>
                            <div className="tab-content px-5 pb-5">
                                <div className="tab-pane grid grid-cols-12 gap-y-8 gap-x-10 active">
                                    <div className="col-span-6 sm:col-span-6">
                                        <div className="justify-center flex items-center text-slate-600 mt-12"> Soi ability tested: </div>
                                        <div className="justify-center flex items-center mt-4">
                                            <div className="relative text-4xl font-bold pl-3 ml-0.5 uppercase">{result.test_id.split('_').join(' ')}</div>
                                        </div>
                                        <div className="justify-center flex items-center text-slate-600 mt-12"> Your total Score is: </div>
                                        <div className="justify-center flex items-center mt-4">
                                            <div className="relative text-4xl font-bold pl-3 ml-0.5">{Math.round(result.score * 1000) / 1000}</div>
                                        </div>
                                        <div className="justify-center flex items-center text-slate-600 mt-12"> With respect to the average your Ability is: </div>
                                        <div className={'justify-center flex items-center mt-4 alert '+(result.avg === 'strength' ? 'alert-success' : (result.avg === 'weakness' ? 'alert-danger' : 'alert-warning'))+' show'}>
                                            <div className="relative text-4xl font-bold pl-3 ml-0.5 uppercase">{result.avg}</div>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <div className="justify-center flex items-center text-slate-600 mt-12">
                                            <img width='500' src='/images/soi-cube.svg' alt='SOI Cube' className='w-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="col-span-12 lg:col-span-12 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 border-dashed">
                            <div className="alert alert-warning show mb-2" role="alert">
                                <div className="flex items-center">
                                    <div className="font-medium text-lg">Oh...oh! Attention! No test submitted.</div>
                                </div>
                                <div className="my-3">In order to see the report, first choose a SOI ability and complete the relative questions.</div>
                                <div className="mt-3">
                                    <NavLink to={'/start-test'}>
                                        <button className="btn btn-primary w-full mr-1 mb-2 mt-5">Let's start the test!</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}
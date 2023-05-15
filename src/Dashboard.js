import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPrologAnswer, getTestName, setPrologAnswer, setTestName } from './features/soiSlice'

export const Dashboard = () => {

    const dispatch = useDispatch()
    const testName = useSelector(getTestName)
    const prologAnswer = useSelector(getPrologAnswer)

    const manageForm = (e) => {
        e.preventDefault()
        console.log('submitted', testName)
        
        const session = window.pl.create()
        session.consult('/prolog/prova.pl', {
            success: function() {
                console.log('Program loaded correctly')
                session.query('parent(X,'+testName+').', {
                    success: function(goal) {
                        console.log({goal})
                        session.answer({
                            success: function(answer) {
                                let answers = [answer.links.X.id]
                                console.log(answer.links.X.id) // X = salad ;
                                session.answer({
                                    success: function(answer) {
                                        answers.push(answer.links.X.id)
                                        console.log(answer.links.X.id) // X = apples ;
                                        dispatch(setPrologAnswer(answers))
                                    },
                                    // ...
                                })
                            },
                            fail: function() { /* No more answers */ },
                            error: function(err) { console.log({err}) },
                            limit: function() { /* Limit exceeded */ }
                        })
                    },
                    error: function(err) { console.log({err}) }
                })
            },
            error: function(err) { console.log({err}) }
        })
        
    }

    return (
        <>
        <div className="intro-y flex items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">Dashboard</h2>
        </div>
        <div className="progress h-4 mt-3">
            <div className="progress-bar w-3/4" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">70%</div>
        </div>
        <div className='intro-y grid grid-cols-12 gap-6 mt-5'>
            <div className='col-span-12'>
                <div className='intro-y box'>
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                        <h2 className="font-medium text-base mr-auto">Basic Test</h2>
                    </div>
                    <div className="p-5">
                        <div className="preview">
                            <form>
                                <div className="form-inline">
                                    <label htmlFor="horizontal-form-1" className="form-label sm:w-20">Enter a Name</label>
                                    <input
                                        type="text"
                                        name='testName'
                                        id="horizontal-form-1"
                                        className="form-control"
                                        placeholder="carlo"
                                        value={testName}
                                        onChange={(e) => dispatch(setTestName(e.target.value))} />
                                    <div className="sm:ml-20 sm:pl-5 mt-5">
                                        <button
                                            type='button'
                                            className="btn btn-primary"
                                            onClick={(e) => manageForm(e)}
                                        >Try it!</button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3">
                                <div className="alert alert-secondary show mb-2" role="alert">
                                    <div className="flex items-center">
                                    <div className="font-medium text-lg">Prolog Answer</div>
                                    </div>
                                    <div className="mt-3">The parents of <div className="text-xs bg-slate-500 px-1 rounded-md text-white inline">{testName}</div> are: {
                                        prologAnswer.map((a,i) => {
                                            return <div key={i} className="text-xs bg-slate-500 px-1 rounded-md text-white inline">{a}</div>
                                        })
                                    }</div>
                                    </div>
                            </div>
                            <h2 className="font-medium text-base mr-auto mt-5">Knowledge Base Test</h2>
                            <pre>
                                <code className="html hljs xml">
                                    <span className="hljs-tag w-full block">parent(carlo, stefano).</span>
                                    <span className='hljs-tag w-full block'>parent(carlo, stefano).</span>
                                    <span className='hljs-tag w-full block'>parent(alfonso, marcella).</span>
                                    <span className='hljs-tag w-full block'>parent(anna, stefano).</span>
                                    <span className='hljs-tag w-full block'>parent(francesco, alfonso).</span>
                                    <span className='hljs-tag w-full block'>parent(lucia, alfonso).</span>
                                    <span className='hljs-tag w-full block'>parent(iginia, carlo).</span>
                                    <span className='hljs-tag w-full block'>parent(alfonso, carlo).</span>
                                    <span className='hljs-tag w-full block'>parent(iginia, marcella).</span>
                                    <span className='hljs-tag w-full block'>parent(pietro, francesco).</span>
                                    <span className='hljs-tag w-full block'>parent(giovanni, anna).</span>
                                    <span className='hljs-tag w-full block'>parent(immacolata, anna).</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
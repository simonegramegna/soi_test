import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, GitHub, ChevronRight, AlertTriangle } from 'react-feather'
import { routes as r } from '../../config/routes'

export const Dashboard = () => {

    return (
        <>
        <div className='intro-y grid grid-cols-12 gap-6 mt-5'>
            <div className='col-span-12'>
                <div className='intro-y box'>
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                        <h2 className="font-medium text-base mr-auto">Welcome, to S.O.I. Learning Abilities Test!</h2>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>                    
                        <div className='col-span-12 p-5'>
                            <h3 className='font-medium'>THE GUILFORD'S STRUCTURE OF INTELLECT APPROACH TO TESTING</h3>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 gap-6'>                    
                        <div className='col-span-12 lg:col-span-6'>
                            <div className="p-5 pt-0">
                                <p className='mb-2'>Traditionally intelligence tests have defined intelligence in terms of test performance relative to the performance of others who have taken the tests. This traditional approach (where intelligence test scores are predicated on population norms) usually results in a single index expressed in terms of numbers. Too often the single score has been used to classify children in ways that may be detrimental to them as persons and misleading to those who are responsible for their formal education. In addition, there can be no real guarantee that the sample populations tested were in fact representative of all types of children and their varying situations.</p>
                                <p className='mb-2'>The S.0.I. approach represents an alternative. This alternative recognizes the fact that children must have developed certain intellectual abilities in order to learn. As an alternative approach to testing, it does not ask "how much," it asks, instead, "what kind". The S.0.I. approach is based on <strong>Guilford's Theory of Intelligence</strong> and measures many separate intellectual abilities in terms of individual strengths and weaknesses, not just general intelligence. According to Guilford, intelligence is a combination of multiple intellectual abilities rather than just one attribute. SOI theory comprises different components of intelligence arranged along three dimensions, which are <strong>operation, content, and products</strong>.</p>
                                <p className='mb-2'>The test results, shown in a profile for each student referenced to his or her own overall performance on the test, aim to define appropriate teaching procedures and individualized curriculum. If students are achieving at grade level then we must know, first, whether the prerequisite intellectual abilities will support higher achievement. If students are achieving beyond expected grade levels, we must also know what abilities make them superior so that these abilities can be further emphasized.</p>
                                <Link to={r.test.uri} className='btn btn-lg btn-primary w-full my-4'>Let's start the test!</Link>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className="p-3">
                                <img width='500' src='/images/soi-cube.svg' alt='SOI Cube' className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <div className="col-span-12 lg:col-span-6">
                <div className="intro-y box h-full">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 className="font-medium text-base mr-auto">
                            Authors
                        </h2>
                    </div>
                    <div className="p-5">
                        <div className="flex items-start px-5 mb-3">
                            <div className="w-full flex flex-col lg:flex-row items-center">
                                <div className="w-16 h-16 image-fit">
                                    <img alt="Alberto G. Valerio" className="rounded-full" src="/images/alberto-valerio.jpg" />
                                </div>
                                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                    <span className="font-medium">Alberto G. Valerio</span> 
                                    <div className="text-slate-500 text-xs mt-0.5">Master's Degree Student in Computer Science</div>
                                </div>
                                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                    <Link to="#" onClick={(e) => {window.location.href = 'mailto:a.valerio31@studenti.uniba.it'}} className='w-8 h-8 rounded-full flex items-center justify-center border ml-2 text-slate-400 zoom-in'><Mail className='w-3 h-3' /></Link>
                                    <Link to="#" onClick={(e) => {window.open('https://github.com/albertovalerio')}} className='w-8 h-8 rounded-full flex items-center justify-center border ml-2 text-slate-400 zoom-in'><GitHub className='w-3 h-3' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start px-5 mt-5">
                            <div className="w-full flex flex-col lg:flex-row items-center">
                                <div className="w-16 h-16 image-fit">
                                    <img alt="Simone Gramegna" className="rounded-full" src="/images/simone-gramegna.jpeg" />
                                </div>
                                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                    <span className="font-medium">Simone Gramegna</span> 
                                    <div className="text-slate-500 text-xs mt-0.5">Master's Degree Student in Computer Science</div>
                                </div>
                                <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                    <Link to="#" onClick={(e) => {window.location.href = 'mailto:s.gramegna5@studenti.uniba.it'}} className='w-8 h-8 rounded-full flex items-center justify-center border ml-2 text-slate-400 zoom-in'><Mail className='w-3 h-3' /></Link>
                                    <Link to="#" onClick={(e) => {window.open('https://github.com/simonegramegna')}} className='w-8 h-8 rounded-full flex items-center justify-center border ml-2 text-slate-400 zoom-in'><GitHub className='w-3 h-3' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-center lg:text-left p-5">
                            <div className="mb-3">This test-tool has been realized as a lab activity for the exam in <strong>Fundamentals of Artificial Intelligence</strong>  with <strong>Professor Stefano Ferilli</strong> at <strong>University of Bari "<em>Aldo Moro</em>", Italy</strong>.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <div className="intro-y box h-full">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                        <h2 className="font-medium text-base mr-auto">
                            Credits
                        </h2>
                    </div>
                    <div className="p-5">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start text-primary underline">
                                <ChevronRight className="w-5 h-5 mr-2" /><Link to="#" onClick={(e) => {window.open('http://tau-prolog.org/')}} >Tau-Prolog.org</Link>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start text-primary underline mt-5">
                                <ChevronRight className="w-5 h-5 mr-2" /><Link to="#" onClick={(e) => {window.open('https://reactjs.org/')}} >Reactjs.org</Link>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start text-primary underline mt-5">
                                <ChevronRight className="w-5 h-5 mr-2" /><Link to="#" onClick={(e) => {window.open('https://redux-toolkit.js.org/')}} >Redux-toolkit.js.org</Link>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start text-primary underline mt-5">
                                <ChevronRight className="w-5 h-5 mr-2" /><Link to="#" onClick={(e) => {window.open('https://tailwindcss.com/')}} >Tailwindcss.com</Link>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start text-primary underline mt-5">
                                <ChevronRight className="w-5 h-5 mr-2" /><Link to="#" onClick={(e) => {window.open('https://feathericons.com/')}} >Feathericons.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro-y grid grid-cols-12 gap-6 mt-5">
            <div className="col-span-12 lg:col-span-12">
                <div className="intro-y">
                    <div className="alert alert-pending mb-2 mt-5" role="alert">
                        <AlertTriangle className='w-4 h-4 mr-2 inline' /><strong>Notice</strong>: this project was carried out on a non-profit basis but for the sole "fair-use" purpose such as education and research, in particular about Artificial Intelligence systems based on logic programming. However this may have involved the analysis and usage of copyright-protected material. We don't own the COPYRIGHT of this material which belongs to the rightful owners. <br /> If you are the owner and believe there has been any copyright infrangement, reach us at our email addresses and we will immediately remove the concerned contents.
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
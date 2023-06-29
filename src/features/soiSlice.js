import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cfuAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
        '11': '',
        '12': '',
        '13': '',
        '14': '',
        '15': ''
    },
    cfcAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': ''
    },
    cftAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': ''
    },
    cmrAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': ''
    },
    cmsAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': ''
    },
    efuAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': ''
    },
    nstAnswers: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': ''
    },
    msuAnswers: {
        '1': '',
        '2': '',
        '3': ''
    },
    mssAnswers: {
        '1': '',
        '2': '',
        '3': ''
    },
    result: '' 
}

export const soiSlice = createSlice({
    name: 'soi',
    initialState,
    reducers: {
        setCfuAnswers: (state, action) => {
            state.cfuAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setCfcAnswers: (state, action) => {
            state.cfcAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setCftAnswers: (state, action) => {
            state.cftAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setCmrAnswers: (state, action) => {
            state.cmrAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setCmsAnswers: (state, action) => {
            state.cmsAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setEfuAnswers: (state, action) => {
            state.efuAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setNstAnswers: (state, action) => {
            state.nstAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setMsuAnswers: (state, action) => {
            state.msuAnswers[action.payload.aNumber] = action.payload.aValue
        },
        setMssAnswers: (state, action) => {
            state.mssAnswers[action.payload.aNumber] = action.payload.aValue
        },
        resetAnswers: (state, action) => {
            state.cfuAnswers = {'1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':'','10':'','11':'','12':'','13':'','14':'','15':''}
            state.cfcAnswers = {'1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':''}
            state.cftAnswers = {'1':'','2':'','3':'','4':'','5':'','6':'','7':''}
            state.cmrAnswers = {'1':'','2':'','3':'','4':'','5':'','6':'','7':''}
            state.cmsAnswers = {'1':'','2':'','3':'','4':'','5':'','6':''}
            state.efuAnswers = {'1':'','2':'','3':'','4':'','5':'','6':'','7':''}
            state.nstAnswers = {'1':'','2':'','3':'','4':'','5':'','6':''}
            state.msuAnswers = {'1':'','2':'','3':''}
            state.mssAnswers = {'1':'','2':'','3':''}
        },
        setResult: (state, action) => {
            state.result = action.payload
        }
    }
})

// selectors
export const getCfuAnswers = state => state.soi.cfuAnswers
export const getCfcAnswers = state => state.soi.cfcAnswers
export const getCftAnswers = state => state.soi.cftAnswers
export const getCmrAnswers = state => state.soi.cmrAnswers
export const getCmsAnswers = state => state.soi.cmsAnswers
export const getEfuAnswers = state => state.soi.efuAnswers
export const getNstAnswers = state => state.soi.nstAnswers
export const getMsuAnswers = state => state.soi.msuAnswers
export const getMssAnswers = state => state.soi.mssAnswers
export const getAllAnswers = (state) => {
    return {
        'cfu': Object.values(state.soi.cfuAnswers),
        'cfc': Object.values(state.soi.cfcAnswers),
        'cft': Object.values(state.soi.cftAnswers),
        'cmr': Object.values(state.soi.cmrAnswers),
        'cms': Object.values(state.soi.cmsAnswers),
        'efu': Object.values(state.soi.efuAnswers),
        'nst': Object.values(state.soi.nstAnswers),
        'msu': Object.values(state.soi.msuAnswers),
        'mss': Object.values(state.soi.mssAnswers)
    }
}
export const getResult = (state) => state.soi.result

export const { setCfuAnswers, setCfcAnswers, setCftAnswers, setCmrAnswers, setCmsAnswers, setEfuAnswers, setNstAnswers, setMsuAnswers, setMssAnswers, resetAnswers, setResult } = soiSlice.actions;
export default soiSlice.reducer
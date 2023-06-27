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
    }
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

export const { setCfuAnswers, setCfcAnswers, setCftAnswers, setCmrAnswers, setCmsAnswers, setEfuAnswers, setNstAnswers, setMsuAnswers, setMssAnswers } = soiSlice.actions;
export default soiSlice.reducer
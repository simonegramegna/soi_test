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
        }
    }
})

// selectors
export const getCfuAnswers = state => state.soi.cfuAnswers
export const getCfcAnswers = state => state.soi.cfcAnswers
export const getCftAnswers = state => state.soi.cftAnswers
export const getCmrAnswers = state => state.soi.cmrAnswers
export const getCmsAnswers = state => state.soi.cmsAnswers

export const { setCfuAnswers, setCfcAnswers, setCftAnswers, setCmrAnswers, setCmsAnswers } = soiSlice.actions;
export default soiSlice.reducer
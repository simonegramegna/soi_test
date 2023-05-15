import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testName: 'carlo',
    prologAnswer: [],
}

export const soiSlice = createSlice({
    name: 'soi',
    initialState,
    reducers: {
        setTestName: (state, action) => {
            state.testName = action.payload
        },
        setPrologAnswer: (state, action) => {
            state.prologAnswer = action.payload
        },
    }
})

// selectors
export const getTestName = state => state.soi.testName
export const getPrologAnswer = state => state.soi.prologAnswer

export const { setTestName, setPrologAnswer } = soiSlice.actions;
export default soiSlice.reducer
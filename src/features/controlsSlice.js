import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobileMenu: {
        mobileCss: 'hidden',
        openMenu: ''
    },
    modalOpt: {
        isVisible: false,
        size: '',
        imgSrc: ''
    },
    currentAbility: '',
    currentStep: ''
}

export const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setMobileMenu: (state, action) => {
            Object.keys(action.payload).forEach((k) => {
                state.mobileMenu[k] = action.payload[k]
            }) 
        },
        setModalOpt: (state, action) => {
            Object.keys(action.payload).forEach((k) => {
                state.modalOpt[k] = action.payload[k]
            })
        },
        setCurrentAbility: (state, action) => {
            state.currentStep = action.payload
        },
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload
        }
    }
})

// selectors
export const getMobileMenu = state => state.controls.mobileMenu
export const getModalOpt = state => state.controls.modalOpt
export const getCurrentAbility = state => state.controls.currentStep
export const getCurrentStep = state => state.controls.currentStep

export const { setMobileMenu, setModalOpt, setCurrentAbility, setCurrentStep } = controlsSlice.actions;
export default controlsSlice.reducer
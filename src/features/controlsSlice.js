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
    currentStep: '',
    randomGeneratorMsu: {
        '1': {
            maxLength: 3,
            sequence: '111',
            visibility: 'block',
            progressWidth: '100%'
        },
        '2': {
            maxLength: 4,
            sequence: '1111',
            visibility: 'block',
            progressWidth: '100%'
        },
        '3': {
            maxLength: 5,
            sequence: '11111',
            visibility: 'block',
            progressWidth: '100%'
        },
    },
    randomGeneratorMss: {
        '1': {
            maxLength: 3,
            sequence: '111',
            visibility: 'block',
            progressWidth: '100%'
        },
        '2': {
            maxLength: 4,
            sequence: '1111',
            visibility: 'block',
            progressWidth: '100%'
        },
        '3': {
            maxLength: 5,
            sequence: '11111',
            visibility: 'block',
            progressWidth: '100%'
        },
    },
    toastOpt: {
        isVisible: false,
        attentionSeeker: false,
        errors: []
    },
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
        },
        setRandomGeneratorMsu: (state, action) => {
            Object.keys(action.payload.aValue).forEach(k => {
                state.randomGeneratorMsu[action.payload.aNumber][k] = action.payload.aValue[k]
            })
        },
        setRandomGeneratorMss: (state, action) => {
            Object.keys(action.payload.aValue).forEach(k => {
                state.randomGeneratorMss[action.payload.aNumber][k] = action.payload.aValue[k]
            })
        },
        setToastOpt: (state, action) => {
            Object.keys(action.payload).forEach((k) => {
                state.toastOpt[k] = action.payload[k]
            })
        }
    }
})

// selectors
export const getMobileMenu = state => state.controls.mobileMenu
export const getModalOpt = state => state.controls.modalOpt
export const getCurrentAbility = state => state.controls.currentStep
export const getCurrentStep = state => state.controls.currentStep
export const getRandomGeneratorMsu = state => state.controls.randomGeneratorMsu
export const getRandomGeneratorMss = state => state.controls.randomGeneratorMss
export const getToastOpt = state => state.controls.toastOpt
export const getRandomSequence = (state) => {
    return {
        'msu': Object.values(state.controls.randomGeneratorMsu).map(e => e.sequence),
        'mss': Object.values(state.controls.randomGeneratorMss).map(e => e.sequence)
    }
}

export const { setMobileMenu, setModalOpt, setCurrentAbility, setCurrentStep, setRandomGeneratorMsu, setRandomGeneratorMss, setToastOpt } = controlsSlice.actions;
export default controlsSlice.reducer
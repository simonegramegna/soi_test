import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobileMenu: {
        mobileCss: 'hidden',
        openMenu: ''
    }
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
    }
})

// selectors
export const getMobileMenu = state => state.controls.mobileMenu

export const { setMobileMenu } = controlsSlice.actions;
export default controlsSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import controlsReducer from '../features/controlsSlice'
import soiReducer from '../features/soiSlice'


export const store = configureStore({
    reducer: {
        controls: controlsReducer,
        soi: soiReducer,
    },
})

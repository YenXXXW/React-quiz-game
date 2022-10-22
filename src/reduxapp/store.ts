import { configureStore } from '@reduxjs/toolkit'
import gameSlice from '../features/game/gameSlice'

const store = configureStore({
    reducer :{
        game : gameSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
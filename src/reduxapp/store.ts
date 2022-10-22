import { configureStore } from '@reduxjs/toolkit'
import gameSlice from '../features/game/gameSlice'
import UserInfoSlice from '../features/useInfo/UserInfoSlice'

const store = configureStore({
    reducer :{
        game : gameSlice ,
        UserInfo : UserInfoSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
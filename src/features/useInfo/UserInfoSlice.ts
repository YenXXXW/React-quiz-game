import { createSlice   } from '@reduxjs/toolkit'
import { userInfoQuiz } from '../../typings'

interface InitialState {
    score : number
    userInfoQuizArr : userInfoQuiz[]
} 

const initialState : InitialState={
    score : 0 ,
    userInfoQuizArr : []
}

const UserInfoSlice = createSlice({
    name : 'useInfo' ,
    initialState ,
    reducers : {
        ResetScore : (state)=>{
            state.score = 0
        },
        AddScore : (state)=>{
            state.score++
        },
        ResetUserInfo : (state)=>{
            state.userInfoQuizArr = []
        },
        AddUserInfoQuiz : (state , action)=>{
            state.userInfoQuizArr=state.userInfoQuizArr.concat(action.payload)
        }
    }
})

export default UserInfoSlice.reducer
export const { AddScore , AddUserInfoQuiz , ResetScore , ResetUserInfo } = UserInfoSlice.actions
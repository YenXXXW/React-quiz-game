import { createSlice  , PayloadAction } from '@reduxjs/toolkit'
import { userInfoQuiz } from '../../typings'

interface initialState {
    score : number
    userInfoQuizArr : userInfoQuiz[]
} 

const initialState : initialState={
    score : 0 ,
    userInfoQuizArr : []
}

const UserInfoSlice = createSlice({
    name : 'useInfo' ,
    initialState ,
    reducers : {
        AddScore : (state)=>{
            console.log('added')
            state.score++
            console.log(state.score)
        },
        AddUserInfoQuiz : (state , action)=>{
            state.userInfoQuizArr=state.userInfoQuizArr.concat(action.payload)
            console.log(state.userInfoQuizArr)
        }
    }
})

export default UserInfoSlice.reducer
export const { AddScore , AddUserInfoQuiz } = UserInfoSlice.actions
import { createSlice  , PayloadAction} from '@reduxjs/toolkit'
import { QuizObject } from '../../typings'

interface initialState {
    Quiz : QuizObject[]
}

const initialState : initialState ={
    Quiz : []
}

const gameSlice = createSlice({
    name : 'game' ,
    initialState ,
    reducers : {
        Quizfetched : (state , action:PayloadAction<QuizObject[]>)=>{
            state.Quiz = [...action.payload]
        },
        completedQuiz : (state)=>{
            state.Quiz.shift() 
        }
    }
})

export default gameSlice.reducer
export const { completedQuiz  , Quizfetched} = gameSlice.actions
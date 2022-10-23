import { useEffect , useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { completedQuiz } from '../features/game/gameSlice'
import { AddScore, AddUserInfoQuiz } from '../features/useInfo/UserInfoSlice'
import { useAppSelector , useAppDispatch } from '../reduxapp/hooks'
import { userInfoQuiz } from '../typings'

export const QuizDetail = () => {

    const [Index , setIndex ]  = useState(0)
    const [ selectedAnswer , setSelectedAnswer ] = useState('')
    const [ toNext , setToNext ] = useState(false)
    let Qnumber = 0 

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const Quiz = useAppSelector(state=>state.game.Quiz)   
    const location = useLocation()
    // insert the correct answer into incorrectAnswers array  
    useEffect(()=>{
        const index = Math.round(Math.random()*10)%4
        setIndex(index)
    },[location])
 
    const handleNext=()=>{
        
        if(selectedAnswer === Quiz[0].correctAnswer){
            dispatch(AddScore())
        }
        dispatch(completedQuiz())
        const Answers = [...Quiz[0].incorrectAnswers]
        Answers.splice(Index , 0 ,Quiz[0].correctAnswer)
        const info : userInfoQuiz = {
            question : Quiz[0].question ,
            answers : Answers ,
            userSelectedAnswer : selectedAnswer ,
            correctAnswer : Quiz[0].correctAnswer
        }
        dispatch(AddUserInfoQuiz(info))
        if(Qnumber=== 9){
            navigate(`/score`)
        }else{
            navigate(`/question/${Qnumber+2}`)
        }
        
    }

    
    // function to render the questions and answers
    const Question =()=>{      
        let answers: string[] = [...Quiz[0].incorrectAnswers]
        answers.splice(Index , 0 ,Quiz[0].correctAnswer)
        Qnumber = (10-Quiz.length)
        return(
            <div className='space-y-5 w-full'>
                <div className='backdrop-blur-md bg-black/5 rounded-md text-green-700 px-5 py-3' >
                    Q{Qnumber+1}. {Quiz[0].question}
                </div>
                <div className='space-y-3 flex flex-col items-center'>
                
                    <div className='backdrop-blur-md bg-white rounded-md shadow-lg'>
                        <div
                            onClick ={()=>{setSelectedAnswer(answers[0]) ; setToNext(true)}}
                            className={`w-[300px] px-2 text-center py-1 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[0] ? 'bg-[#03fce3]' : ''}`}
                        
                        >
                            {answers[0]}
                        </div>  
                    </div>
                    <div className='backdrop-blur-md bg-white rounded-md shadow-lg'>
                        <div
                        className={`w-[300px] px-2 text-center py-1 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[1] ? 'bg-[#03fce3]' : ''}`}
                        onClick ={()=>{setSelectedAnswer(answers[1]) ; setToNext(true)}}
                        >
                            {answers[1]}
                        </div>
                    </div>                        
                
                    <div className='backdrop-blur-md bg-white rounded-md'>
                        <div
                        className={`w-[300px] px-2 text-center py-1 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[2] ? 'bg-[#03fce3]' : ''}`}
                        onClick ={()=>{setSelectedAnswer(answers[2]) ; setToNext(true)}}
                        >
                            {answers[2]}
                        </div>
                    </div>
                    <div className='backdrop-blur-md bg-white rounded-md'>
                        <div
                        className={`w-[300px] px-2 text-center py-1 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[3] ? 'bg-[#03fce3]' : ''}`}
                        onClick ={()=>{setSelectedAnswer(answers[3]) ; setToNext(true)}}
                        >
                            {answers[3]}
                        </div>
                    </div>
                
                </div>
                
                {
                    Qnumber < 9 && toNext && (                        
                        <div
                            className='mx-auto text-green-700 bg-[#f7ef8a] text-center w-[80px] text-base rounded-sm font-normal shadow-lg cursor-pointer'
                            onClick={handleNext}
                        >
                            Next
                        </div>
                    ) 
                }
                {
                    Qnumber === 9 && toNext && (                        
                        <div
                         className='mx-auto text-green-700 bg-[#f7ef8a] text-center w-[80px] text-base rounded-sm font-normal shadow-lg cursor-pointer'
                         onClick={handleNext} 
                        >
                            finish
                        </div>
                    ) 
                }
                              
            </div>
        )
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center font-bold'>
        {/* Loading text till useAppSelector is completed  */}
        {
            Quiz.length === 0 &&(
                <p className='text-white font-bold'>Loading...</p>
            )
        }
        {
            Quiz.length > 0 &&(                
                <div className='flex space-x-2  px-3 py-3 text-white text-lg max-w-[80vw]'>
                    <div className='w-full'>
                        {/* Render the question and answers only after useAppSelector is completed */}
                       {Question()} 
                    </div>                    
                </div>    
            )
        }
    </div>
  )
}

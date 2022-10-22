import React , { useEffect , useState} from 'react'
import { useAppSelector  } from '../reduxapp/hooks'

export const QuizDetail = () => {
    
    const Quiz = useAppSelector(state=>state.game.Quiz) 
    const [ selectedAnswer , setSelectedAnswer ] = useState('')
    const Question =()=>{
        let index = Math.round(Math.random()*10)%4
        console.log(index)
        let answers: string[] = [...Quiz[0].incorrectAnswers]
        answers.splice(index , 0 ,Quiz[0].correctAnswer)
        console.log(answers)
        return(
            <div className='space-y-5 w-full'>
                <div className='border-[3px] border-emerald-100 px-3 py-2' >
                    Q{(10-Quiz.length)+1}. {Quiz[(10-Quiz.length)].question}
                </div>
                <div className='space-y-3 flex flex-col items-center'>
                    <div className='space-y-3 md:space-y-0 md:flex md:space-x-32'>
                        <div
                         className={`w-[200px] text-center py-1 bg-white/75 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[0] ? 'bg-orange-400' : ''}`}
                         onClick ={()=>{setSelectedAnswer(answers[0])}}
                        >
                            {answers[0]}
                        </div>
                        <div
                         className={`w-[200px] text-center py-1 bg-white/75 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[1] ? 'bg-orange-400' : ''}`}
                         onClick ={()=>{setSelectedAnswer(answers[1])}}
                        >
                            {answers[1]}
                        </div>
                    </div>
                    <div className='space-y-3 md:space-y-0 md:space-x-32 md:flex'>
                        <div
                         className={`w-[200px] text-center py-1 bg-white/75 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[2] ? 'bg-orange-400' : ''}`}
                         onClick ={()=>{setSelectedAnswer(answers[2])}}
                        >
                            {answers[2]}
                        </div>
                        <div
                         className={`w-[200px] text-center py-1 bg-white/75 text-green-600 rounded-md cursor-pointer ${selectedAnswer === answers[3] ? 'bg-orange-400' : ''}`}
                         onClick ={()=>{setSelectedAnswer(answers[3])}}
                        >
                            {answers[3]}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
  return (
    <div className='w-full h-screen flex items-center justify-center font-bold'>
        {
            Quiz.length === 0 &&(
                <p className='text-white font-bold'>Loading...</p>
            )
        }
        {
            Quiz.length > 0 &&(
                
                <div className='flex space-x-2  px-3 py-3 text-white text-lg max-w-[80vw]'>
                    
                    <div className='w-full'>
                       {Question()} 
                    </div>
                    
                </div>    
            )
        }
    </div>
  )
}

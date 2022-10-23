import { useNavigate } from 'react-router-dom';
import { ResetScore, ResetUserInfo } from '../features/useInfo/UserInfoSlice';
import { useAppSelector , useAppDispatch } from '../reduxapp/hooks'
import { userInfoQuiz } from '../typings';

export const Review = () => {
  const userInfo = useAppSelector(state=>state.UserInfo.userInfoQuizArr)
  const dispatch = useAppDispatch()
  const navigate= useNavigate()
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <p className='font-bold'>Review</p>
      {
        userInfo.map((info : userInfoQuiz, i:number)=>{
          return(
            <div className='mt-5 bg-white/70 px-5 flex w-[80vw] md:w-[60vw] pb-2' key={i}>
              <p>Q{i+1}.</p>
              <div className='ml-2'>
                <p> {info.question}</p>
                <p
                 className={`w-[50vw] mt-2 pl-2 ${info.answers[0] === info.correctAnswer ? 'bg-green-500' : ''}
                 ${info.answers[0] === info.userSelectedAnswer && info.answers[0] !== info.correctAnswer ? 'bg-red-500' : ''}`}
                >
                  {info.answers[0]}
                </p>
                <p
                 className={`w-[50vw] mt-2 pl-2 ${info.answers[1] === info.correctAnswer ? 'bg-green-500' : ''}
                 ${info.answers[1] === info.userSelectedAnswer && info.answers[1] !== info.correctAnswer ? 'bg-red-500' : ''}`}
                >
                  {info.answers[1]}
                </p>
                <p
                 className={`w-[50vw] mt-2 pl-2 ${info.answers[2] === info.correctAnswer ? 'bg-green-500' : ''}
                 ${info.answers[2] === info.userSelectedAnswer && info.answers[2] !== info.correctAnswer ? 'bg-red-500' : ''}`}
                >
                  {info.answers[2]}
                </p>
                <p
                 className={`w-[50vw] mt-2 pl-2 ${info.answers[3] === info.correctAnswer ? 'bg-green-500' : ''}
                 ${info.answers[3] === info.userSelectedAnswer && info.answers[3] !== info.correctAnswer ? 'bg-red-500' : ''}`}
                >
                  {info.answers[3]}
                </p>
              </div>
              
            </div> 
          )
        })
      }
      <button onClick={()=>{
        dispatch(ResetScore()) ;
        dispatch(ResetUserInfo())
        navigate('/')
      }}
      className ='py-1 px-1 shadow-xl bg-[#faf173] text-green-600 rounded-md my-4 font-bold'
      >
        New game
      </button>
    </div>
  )
}

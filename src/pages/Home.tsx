import axios from 'axios'
import { useEffect ,useState  } from 'react'
import { useNavigate } from "react-router-dom";
import { useAppDispatch , useAppSelector} from '../reduxapp/hooks'
import { Quizfetched  } from '../features/game/gameSlice'
import { Routes , Route } from 'react-router-dom'
import { QuizDetail } from './Quiz'

function Home() {

  const dispatch = useAppDispatch()
  const [ fetchQuiz , setFetchQuiz ] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(fetchQuiz){
      handleFetch()
     navigate('/question/1')     
    }
  },[fetchQuiz])

  
  const handleFetch =async () =>{
    try{
      const res = await axios.get('https://the-trivia-api.com/api/questions?limit=10&difficulty=easy')
      dispatch(Quizfetched(res.data))
    }catch(error){
      console.log(error);
    }
    
  }
  const Quiz= useAppSelector(state=>state.game.Quiz)
  console.log(Quiz);
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className='backdrop-blur-md bg-white/20 px-9 py-5 text-center rounded-md space-y-5'>
          <p className='text-blue-700 font-bold text-lg'>Welcome to the quiz</p>
          <button onClick={()=>setFetchQuiz(true)}>Start</button>
        </div>
      </div>
    </>
    
  );
}

export default Home;

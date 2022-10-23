import axios from 'axios'
import { useEffect ,useState  } from 'react'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../reduxapp/hooks'
import { Quizfetched  } from '../features/game/gameSlice'

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

  
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className='backdrop-blur-md bg-white/20 px-9 py-5 text-center rounded-md space-y-5'>
          <p className='text-blue-700 font-bold text-lg'>Welcome to the quiz</p>
          <button
           onClick={()=>setFetchQuiz(true)}
           className='bg-blue-700 text-white rounded-md py-1 px-2'
          >
            Start
          </button>
        </div>
      </div>
    </>
    
  );
}

export default Home;

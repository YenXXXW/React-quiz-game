import axios from 'axios'
import { useEffect ,useState  } from 'react'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../reduxapp/hooks'
import { Quizfetched  } from '../features/game/gameSlice'

function Home() {

  const dispatch = useAppDispatch()
  const [ fetchQuiz , setFetchQuiz ] = useState(false)
  const [ difficultyHide , setDifficultyHide ] = useState(true)
  const [ categoryHide , setCategoryHide ] = useState(true)
  const [ difficulty , setDifficulty ] = useState('easy')
  const [ category , setCategory ] = useState('general_knowledge')
  const navigate = useNavigate()

  useEffect(()=>{
    if(fetchQuiz){
      handleFetch()
     navigate('/question/1')     
    }
  },[fetchQuiz])

  
  const handleFetch =async () =>{
    try{
      const res = await axios.get(`https://the-trivia-api.com/api/questions?categories=${category}&limit=10&difficulty=${difficulty}`)
      dispatch(Quizfetched(res.data))
    }catch(error){
      console.log(error);
    }
    
  }

  
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <img src='trivia.png' width="400px" height='200px'/>
        <div className='backdrop-blur-md bg-white/20 px-9 py-5 text-center rounded-md space-y-5 w-[350px]'>
          <p className='text-[#e2a234] font-bold text-lg'>Welcome to the quiz</p>
          <div onClick={()=>{setDifficultyHide(!difficultyHide)}}
           className='cursor-pointer bg-[#e69811] px-2 py-[3px] text-white rounded-sm'
          >
            Select difificulty
          </div>
          <div className={`${difficultyHide ? 'hidden' : 'flex flex-col bg-white/70 text-start mx-3 px-5 rounded-sm' }`}>
            <div
             className={`cursor-pointer mt-2 px-2 hover:bg-[#e2a234] rounded-sm ${difficulty === 'easy' ? 'bg-[#e2a234]' : ''}`}
             onClick={()=>setDifficulty('easy')}
            >
              easy
            </div>
            <div
             className={`cursor-pointer my-2 px-2 hover:bg-[#e2a234] rounded-sm ${difficulty === 'medium' ? 'bg-[#e2a234]' : ''}`}
             onClick={()=>setDifficulty('medium')}
            >
              medium
            </div>
            <div
             className={`cursor-pointer mb-2 px-2 hover:bg-[#e2a234] rounded-sm ${difficulty === 'hard' ? 'bg-[#e2a234]' : ''}`}
             onClick={()=>setDifficulty('hard')}
            >
              hard
            </div>
          </div>
          <div onClick={()=>{setCategoryHide(!categoryHide)}}
           className='cursor-pointer bg-[#e69811] px-2 py-[3px] text-white rounded-sm'
          >
            Select category
          </div>
          <div className={`${categoryHide ? 'hidden' : 'flex flex-col bg-white/70 text-start mx-3  rounded-sm' }`}>
            <div className='h-48 overflow-y-auto px-1'>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'general_knowledge' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('general_knowledge')}
              >
                General Knowledge
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'arts_and_literature' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('arts_and_literature')} 
              >
                Arts & Literature
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'film_and_tv' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('film_and_tv')} 
              >
                Film & TV
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'food_and_drink' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('food_and_drink')} 
              >
                Food & Drink
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'geography' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('geography')}
              >
                Geography
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'history' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('history')}
              >
                History
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'music' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('music')}
              >
                Music
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'science' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('science')}
              >
                Science
              </div>
              <div
               className={`mt-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'society_and_culture' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('society_and_culture')}
              >
                Society & Culture
              </div>
              <div
               className={`my-2  px-1 hover:bg-[#e2a234] rounded-sm ${category === 'sport_and_leisure' ? 'bg-[#e2a234]' : ''}`}
               onClick={()=>setCategory('sport_and_leisure')}
              >
                Sports & Lesiure
              </div>
            </div>
          </div>
          <button
           onClick={()=>setFetchQuiz(true)}
           className='bg-[#e69811] shadow-md text-white rounded-md py-[2px] px-2'
          >
            Start
          </button>
        </div>
      </div>
    </>
    
  );
}

export default Home;

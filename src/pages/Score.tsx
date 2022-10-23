import { useAppSelector , useAppDispatch } from '../reduxapp/hooks'
import { useEffect , useState } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'
import { ResetScore, ResetUserInfo } from '../features/useInfo/UserInfoSlice'

export const Score = () => {
  const score = useAppSelector(state=>state.UserInfo.score)
  const [ width , setWidth ] = useState(0)
  const [ height , setHeight ] = useState(0)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleInitialSize=()=>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(()=>{
    handleInitialSize()
    return()=>handleInitialSize()
  },[])
  useEffect(()=>{
    const handleResize =()=>{
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)      
    }

    window.addEventListener("resize", handleResize);

    return()=>window.removeEventListener("resize", handleResize)
  },[])

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center text-white'>
      <Confetti
      width={width}
      height={height}
    />
      <div className='bg-white/60 max-w-[400px] px-7 py-5 text-center shadow-lg'>
        <p className='text-green-600 font-bold text-xl'>Your score is {score}</p>
      </div>
      <div className='mt-6 flex space-x-14'>
        <div onClick={()=>{
          navigate('/review')
        }}>
          <p className='py-1 px-1 shadow-lg bg-[#faf173] text-green-600 rounded-md cursor-pointer'>Review</p>
        </div>
        <div onClick={()=>{
          dispatch(ResetScore())
          dispatch(ResetUserInfo())
          navigate('/')
        }}>
          <p className='py-1 px-1 shadow-lg bg-[#faf173] text-green-600 rounded-md cursor-pointer'>New game</p>
        </div>
      </div>
      
    </div>
  )
}

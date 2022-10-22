import React from 'react'
import { useAppSelector } from '../reduxapp/hooks'

export const Score = () => {
  const userInfo = useAppSelector(state=>state.UserInfo.userInfoQuizArr)
  const score = useAppSelector(state=>state.UserInfo.score)
  console.log(userInfo)
  return (
    <div className='h-screen w-full flex justify-center items-center text-white'>
      <p>Your score is {score}</p>
    </div>
  )
}

import Capture from "../../assets/Capture.jpg"
import { Button } from '@chakra-ui/react'
import Switch from '../base/swichMode/swichMode'
import { AnswersContext, AnswersProvider } from "../context/answersContext";
import { useContext } from "react";
import highScoreImg from "../../assets/highScoreImg.jpg"
import  midScoreImg  from "../../assets/midScoreImg.jpg"
import lowScoreImg from "../../assets/lowScoreImg.jpg"

export default function ResultComponent() {

  const { correctPercentage, resetAnswers } = useContext(AnswersContext) ?? { correctPercentage: 0, resetAnswers: () => { } };

  const resultImage = correctPercentage >=70 ? highScoreImg : correctPercentage >= 40 ? midScoreImg : lowScoreImg;
  return (

      <div className='mt-0 w-full h-screen flex flex-col gap-8 items-center bg-[#011242]'>
        <div className="w-full h-1/5 flex justify-between">
          <Switch />
          <img src={Capture} alt="" className='w-24 h-24 m-8 transition duration-75 animate-spin' />
        </div>

        <span className="bg-white w-64 h-64 rounded-full" >{resultImage}</span>
        <p className="text-3xl text-orange-300 font-semibold">{correctPercentage >= 70 ? "Great job!!" : correctPercentage >= 40 ? "Not bad!" : "Keep Trying!"}</p>
        <p className="text-3xl text-orange-300 font-semibold">your Score:{correctPercentage}% correct answers</p>
        <Button colorScheme='orange' onClick={resetAnswers} className='m-8 w-56 p-8 font-mono transition-all duration-500 ease-in-out transform hover:scale-110'>Lets Start...</Button>
      </div>

    </AnswersProvider>
  )
}

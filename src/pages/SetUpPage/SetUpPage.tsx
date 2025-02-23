import { useState } from 'react'
import SetUpComponent from '../../components/setUpComponent/setUpComponent'
import { QuizContext } from '../../components/context/quizContext'

export default function SetUpPage() {
  const [qList, setQList] = useState([])
  return (

    <QuizContext.Provider value={{qList, setQList}}>
      <SetUpComponent />

    </QuizContext.Provider>

  )
}


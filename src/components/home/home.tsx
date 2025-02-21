import StartPage from '../startComponent/startComponent'
import SetUpQuiz from '../setUpComponent/setUpComponent'
import ResultPage from '../resultComponent/resultComponent'
import QuizPage from '../quizComponent/quizComponent'

export default function Home() {
  return (
    <div>
      <StartPage/>
      <SetUpQuiz/>
      <QuizPage/>
      <ResultPage/>
    </div>
  )
}

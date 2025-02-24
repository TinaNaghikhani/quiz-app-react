import { Route, Routes } from "react-router-dom"
import StartPage from "./pages/StartPage/StartPage"
import SetUpPage from "./pages/SetUpPage/SetUpPage"
import QuizPage from "./pages/QuizPage/QuizPage"
import ResultPage from "./pages/ResultPage/ResultPage"
import { QuizProvider } from "./components/context/quizContext"


function App() {


  return (
    <QuizProvider>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/SetUpPage" element={<SetUpPage />} />
        <Route path="/QuizPage" element={<QuizPage />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </QuizProvider>

  )
}

export default App

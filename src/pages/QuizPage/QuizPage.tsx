import { LightModeProvider } from '../../components/context/lightMode'
import { QuizProvider } from '../../components/context/quizContext'
import QuizComponent from '../../components/quizComponent/quizComponent'

export default function QuizPage() {
    return (
        
            <LightModeProvider>
                <QuizComponent />

            </LightModeProvider>
        

    )
}

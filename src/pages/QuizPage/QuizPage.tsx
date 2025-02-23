import { LightModeProvider } from '../../components/context/lightMode'
import QuizComponent from '../../components/quizComponent/quizComponent'

export default function QuizPage() {
    return (
        <LightModeProvider>
            <QuizComponent />

        </LightModeProvider>
    )
}

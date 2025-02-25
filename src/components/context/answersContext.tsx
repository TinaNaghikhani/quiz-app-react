import { createContext, useState, ReactNode } from "react";
// Context type definition
interface AnswersContextType {
    correctPercentage: number;
    submitAnswers: (userAnswers: string[], qList: any[]) => void;
    resetAnswers: () => void;}
// Create the context
export const AnswersContext = createContext<AnswersContextType | undefined>(
    undefined);
// Provider component
interface AnswersProviderProps {
    children: ReactNode;}
export const AnswersProvider: React.FC<AnswersProviderProps> = ({
    children,}) => {
    const [correctPercentage, setCorrectPercentage] = useState(0);
    // Submit user answers and calculate the percentage of correct answers
    const submitAnswers = (userAnswers: string[], qList: any[]) => {
        let correctCount = 0;
        qList.forEach((question, index) => {
            if (userAnswers[index] === question.correct_answer) {
                correctCount++;
            }
        });
        const percentage = Math.round((correctCount / qList.length) * 100);
        setCorrectPercentage(percentage);};
    // Reset answers and percentage
    const resetAnswers = () => {
        setCorrectPercentage(0);};
    return (
        <AnswersContext.Provider
            value={{ correctPercentage, submitAnswers, resetAnswers }}
        >
            {children}
        </AnswersContext.Provider>
    );};
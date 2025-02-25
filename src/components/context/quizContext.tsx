import { createContext, Dispatch, SetStateAction, useState } from "react";
// تعریف تایپ برای سوالات
interface Question {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    difficulty: string;
}
// تعریف تایپ برای کانتکس
interface QuizContextType {
    qList: Question[]; // لیست سوالات
    setQList: Dispatch<SetStateAction<Question[]>>; // تابع برای تنظیم لیست سوالات
}
// تعریف مقدار پیش‌فرض برای کانتکس
const defaultContextValue: QuizContextType = {
    qList: [],
    setQList: () => { },};
export const QuizContext = createContext<QuizContextType>(defaultContextValue)
// تعریف Provider
export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [qList, setQList] = useState<Question[]>([]);
    return (
        <QuizContext.Provider value={{ qList, setQList }}>
            {children}
        </QuizContext.Provider>
    );};
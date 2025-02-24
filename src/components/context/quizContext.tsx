import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

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
    setQList: () => { },
};

export const QuizContext = createContext<QuizContextType>(defaultContextValue)
// تعریف Provider
export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [qList, setQList] = useState([]);

    return (
        <QuizContext.Provider value={{ qList, setQList }}>
            {children}
        </QuizContext.Provider>
    );
};

// تعریف Hook برای استفاده از کانتکس
// export const useQuizContext = () => useContext(QuizContext);
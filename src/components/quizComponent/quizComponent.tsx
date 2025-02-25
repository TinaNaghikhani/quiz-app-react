import Loader from "../base/rocket/roket";
import { useNavigate } from "react-router-dom";
// import Switch from "../base/swichMode/swichMode";
import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { QuizContext } from "../context/quizContext";
import EndButton from "../base/endButton/endButton";
import { AnswersContext } from "../context/answersContext";
// import { LightModeContext } from "../context/lightMode";


export default function QuizComponent() {
  const { qList } = useContext(QuizContext);
  const { submitAnswers } = useContext(AnswersContext)
  const [loader, setLoader] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(qList.length).fill(""));
  // const { lightMode, setLightMode } = useContext(LightModeContext);
  const navigator = useNavigate();

  // تابع برای ثبت جواب کاربر
  const handleAnswerSelect = (selectedAnswer: string) => {
    setUserAnswer(selectedAnswer)
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer; // ثبت جواب برای سوال فعلی
    setUserAnswers(updatedAnswers);
  };
  // بررسی خالی بودن qList
  if (!qList || qList.length === 0) {
    return <div>No questions available. Please set up the quiz first.</div>;
  }

  // سوال فعلی
  const currentQuestion = qList[currentQuestionIndex];

  // تابع برای پیمایش به سوال بعدی
  const handleNextQuestion = () => {
    if (currentQuestionIndex < qList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // تابع برای بازگشت به سوال قبلی
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const endBtnHandler = () => {
    setLoader(true)
    submitAnswers(userAnswers, qList); // Submit answers to the context
    setTimeout(() => {
      setLoader(false);
      navigator("/ResultPage"); 
    }, 3000);
  }
  return (
    <div className="p-16 text-white bg-[#011242] pt-4 h-screen flex flex-col gap-32">
      {loader && (
        <div className="bg - black h-screen w-full absolute inset-0 flex items-center justify-center  bg-opacity-50 z-50" >
          <Loader />
        </div>
      )}
      {/* <Switch onClick={() => setLightMode(!lightMode)} /> */}
      <div className="w-full bg-[#011242] text-white flex flex-col justify-center gap-12 items-center ">
        {/* سوال فعلی */}
        <div className="w-3/4 flex flex-col items-center gap-4">
          <span className="p-4 font-mono rounded-3xl bg-white w-full p-4 text-2xl h-28 border border-8 border-orange-400 border-dashed text-[#011242]">
            Question {currentQuestionIndex + 1}: {currentQuestion.question}
          </span>
          {/* گزینه‌ها */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {[
              ...currentQuestion.incorrect_answers,
              currentQuestion.correct_answer,
            ].map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!userAnswers[currentQuestionIndex]} // قفل دکمه‌ها پس از انتخاب
                className={`font-mono text-xl font-semibold w-full p-4 text-[#011242] rounded-md ${userAnswer === option
                    ? option === currentQuestion.correct_answer
                      ? "bg-green-500" // Correct answer
                      : "bg-red-500" // Incorrect answer
                    : "bg-orange-400" // Default color
                  }`}              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* دکمه‌های قبلی و بعدی */}
        <div className="mt-8 flex justify-between w-full max-w-md">
          <Button
            colorScheme="blue"
            size="lg"
            className="font-mono w-36 p-8 text-[#011242]"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <FaArrowAltCircleLeft className="w-10 h-10" />
          </Button>
          <Button
            colorScheme="blue"
            size="lg"
            className="font-mono w-36 p-8 text-[#011242]"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === qList.length - 1}
          >
            <FaArrowAltCircleRight className="w-10 h-10" />
          </Button>
        </div>
        {currentQuestionIndex === qList.length - 1 && (
          <EndButton onClick={endBtnHandler}/>
        )}
      </div>
    </div>
  );
}
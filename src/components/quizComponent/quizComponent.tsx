// import Loader from "../base/rocket/roket";
// import { useNavigate } from "react-router-dom";
// import Switch from '../base/swichMode/swichMode'
// import { useState } from "react";
// import { Button } from "@chakra-ui/react";
// import { FaArrowAltCircleLeft } from "react-icons/fa";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { useQuizContext } from "../context/quizContext";


// export default function QuizComponent() {

//   const { qList } = useQuizContext();
//   const [loader, setLoader] = useState(false)
//   const navigator = useNavigate();
//   const loaderHandler = (): void => {
//     setLoader(true);

//     setTimeout(() => {
//       setLoader(false); // بعد از ۳ ثانیه لودر خاموش شود
//       navigator("/QuizPage"); // به صفحه بعد برو
//     }, 3000);
//   };
//   if (!qList || qList.length === 0) {
//     return <div>No questions available. Please set up the quiz first.</div>;
//   }
//   return (
//     <div className="bg-[#011242] text-white w-full h-screen flex flex-col justify-cemter items-center gap-8">
//       {loader && (
//         <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <Loader />
//         </div>)}
//       <Switch />
//       {qList.map((question, index) => (
//         <div>
//           <span className="font-mono rounded-3xl bg-white w-3/4 p-4 text-2xl h-48 border border-8 border-orange-400 border-dashed text-[#011242] ">{question.question}</span>
//           <div className="grid grid-cols-2 grid-rows-2 gap-20">
//             <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
//             <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
//             <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
//             <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
//           </div>
//         </div>
//       )
//       )}

//       <div className="flex gap-8 justify-baseline">
//         <Button colorScheme='blue' size='lg' className="font-mono w-36 p-8 text-[#011242}"><FaArrowAltCircleLeft className="w-10 h-10" /></Button>
//         <Button colorScheme='blue' size='lg' className="font-mono w-36 p-8 text-[#011242}"><FaArrowAltCircleRight className="w-10 h-10" /></Button>
//       </div>
//     </div>
//   )
// }
import Loader from "../base/rocket/roket";
import { useNavigate } from "react-router-dom";
import Switch from "../base/swichMode/swichMode";
import { useContext, useState } from "react";
import { Button, useConst } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { QuizContext } from "../context/quizContext";

export default function QuizComponent() {
  const { qList } = useContext(QuizContext);
  console.log(qList)
  const [loader, setLoader] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigator = useNavigate();

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

  return (
    <div className="bg-[#011242] text-white w-full h-screen flex flex-col justify-center items-center gap-8">
      {/* لودر */}
      {loader && (
        <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}

      {/* Switch Mode */}
      <Switch />

      {/* سوال فعلی */}
      <div className="w-full max-w-md flex flex-col items-center gap-4">
        <span className="font-mono rounded-3xl bg-white w-full p-4 text-2xl h-48 border border-8 border-orange-400 border-dashed text-[#011242]">
          Question {currentQuestionIndex + 1}: {currentQuestion.question}
        </span>

        {/* گزینه‌ها */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            ...currentQuestion.incorrect_answers,
            currentQuestion.correct_answer,
          ].map((option, index) => (
            <Button
              key={index}
              colorScheme="orange"
              size="lg"
              className="font-mono w-full p-4 text-[#011242]"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* دکمه‌های قبلی و بعدی */}
      <div className="flex gap-8 justify-between w-full max-w-md">
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
    </div>
  );
}
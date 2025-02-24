import { Button } from "@chakra-ui/react";
import Loader from "../base/rocket/roket";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "../base/swichMode/swichMode";
import { getCategory, getQuizData } from "../base/get/get";
import { QuizContext } from "../context/quizContext";

// تعریف تایپ برای سوالات
interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
}

const Regex = /^(5|6|7|8|9|10)$/;

export default function SetUpComponent() {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [category, setCategory] = useState<{ id: number; name: string }[]>([]);
  const { setQList } = useContext(QuizContext); // دریافت setQList از کانتکس
  const navigator = useNavigate();

  // اعتبارسنجی تعداد سوالات
  useEffect(() => {
    if (Regex.test(value)) {
      setIsValid(true);
      setIsDisabled(false);
    } else {
      setIsValid(false);
      setIsDisabled(true);
    }
  }, [value]);

  // دریافت لیست موضوعات
  useEffect(() => {
    getCategory()
      .then((res) => setCategory(res))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // فراخوانی API برای دریافت سوالات
  const quizHandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true); // فعال کردن لودر

    try {
      const { count, category: selectedCategory, difficulty } = e.target as HTMLFormElement;
      const response: Question[] = await getQuizData(
        count.value,
        selectedCategory.value,
        difficulty.value
      );

      if (response && response.length > 0) {
        setQList(response); // ذخیره سوالات در کانتکس
        setLoader(false); // غیرفعال کردن لودر
        navigator("/QuizPage"); // منتقل شدن به صفحه Quiz
      } else {
        alert("No questions available for the selected criteria.");
        console.log("Response from API:", response); // بررسی پاسخ API
        console.log(response)
        setLoader(false); // غیرفعال کردن لودر
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      alert("Failed to fetch quiz data. Please try again.");
      setLoader(false); // غیرفعال کردن لودر
    }
  };

  return (
    <form onSubmit={quizHandler} className="bg-orange-200 text-[#011242] w-full h-screen flex flex-col items-center gap-8">
      {/* لودر */}
      {loader && (
        <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}

      {/* Switch Mode */}
      <Switch />

      {/* تعداد سوالات */}
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <label htmlFor="input" className="text-white font-bold text-2xl font-mono">
          Enter Number Of Q:
        </label>
        <input
          type="number"
          value={value}
          name="count"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number between 5 and 10"
          className="w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono"
        />
        {isValid && <p className="text-xs text-green-500">That's right!</p>}
      </div>

      {/* موضوع سوالات */}
      <div className="w-full flex flex-col gap-8 justify-center items-center">
        <p className="text-white font-bold text-2xl font-mono">Choose Category:</p>
        <select
          name="category"
          className="w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono"
        >
          {category.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {/* سطح سختی سوالات */}
      <div className="w-full flex flex-col gap-8 justify-center items-center">
        <p className="text-white font-bold text-2xl font-mono">Difficulty:</p>
        <select
          name="difficulty"
          className="w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* دکمه شروع کوییز */}
      <Button
        disabled={isDisabled}
        type="submit"
        colorScheme="orange"
        className="w-56 p-8 mt-10 font-mono transition-all duration-500 ease-in-out transform hover:scale-110"
      >
        Let's Start...
      </Button>
    </form>
  );
}
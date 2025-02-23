import { Button } from "@chakra-ui/react";
import Loader from "../base/rocket/roket";
import { useContext, useEffect, useState } from "react";
import { LightModeContext } from "../context/lightMode";
import { useNavigate } from "react-router-dom";
import Switch from '../base/swichMode/swichMode'
import { getCategory, getQuizData } from "../base/get/get";
import { QuizContext } from "../context/quizContext";

const Regex = /^(5|6|7|8|9|10)$/;

export default function SetUpComponent() {
  const [isValid, setIsValid] = useState(false)
  const [value, setValue] = useState("")
  const [loader, setLoader] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [category, setCategory] = useState([])
  const {setQList} = useContext(QuizContext)
  const navigator = useNavigate();
  const loaderHandler = (): void => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false); // بعد از ۳ ثانیه لودر خاموش شود
      navigator("/QuizPage"); // به صفحه بعد برو
    }, 3000);
  };
  useEffect(() => {
    if (Regex.test(value)) {
      setIsValid(true)
      setIsDisabled(false)
    } else {
      setIsValid(false)
      setIsDisabled(true)
    }
  }, [value]);

  const quizHandler = (e) => {
    e.preventDefult()
    const { count, category, difficulty } = e.target;
    getQuizData(count.value, category.value, difficulty.value).then((res)=>setQList(res));

  }
  useEffect(() => {
    getCategory().then(res => {
      setCategory(res)
    })
    return () => {

    };
  }, []);
  return (
    <form onSubmit={quizHandler} className="bg-orange-200 text-[#011242] w-full h-screen flex flex-col items-center gap-8">
      {loader && (
        <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>)}
      <Switch  />

      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <label htmlFor="input" className='text-white font-bold text-2xl font-mono'>Enter Number Of Q:</label>
        <input type="number" value={value} name="count"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number between 5 and 10" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono' />
        {isValid && <p className="text-xs text-green-500">that's right</p>}

      </div>
      <div className='w-full flex flex-col gap-8 justify-center items-center' >
        <p className='text-white font-bold text-2xl font-mono'>
          Chose Category:
        </p>
        <select name="category" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono'>
          {
            category.map(item => <option value={item.id}>{item.name}</option>)
          }
        </select>
      </div>
      <div className='w-full flex flex-col gap-8 justify-center items-center' >
        <p className='text-white font-bold text-2xl font-mono'>
          dificulty:
        </p>
        <select name="difficulty" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono'>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="esay">ESAY</option>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="medium">MEDIUM</option>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="hard">HARD</option>
        </select>
      </div>
      <Button disabled={isDisabled}  onClick={loaderHandler} colorScheme='orange' className='w-56 p-8 mt-10 font-mono transition-all duration-500 ease-in-out transform hover:scale-110'>
        Lets Start...
      </Button>

    </form>
  )
}

import Loader from "../base/rocket/roket";
import { useNavigate } from "react-router-dom";
import Switch from '../base/swichMode/swichMode'
import { useState, useContext } from "react";
import { Button } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


export default function QuizComponent() {


  const [loader, setLoader] = useState(false)
  const navigator = useNavigate();
  const loaderHandler = (): void => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false); // بعد از ۳ ثانیه لودر خاموش شود
      navigator("/QuizPage"); // به صفحه بعد برو
    }, 3000);
  };

  return (
    <div className="bg-[#011242] text-white w-full h-screen flex flex-col justify-cemter items-center gap-8">
      {loader && (
        <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>)}
      <Switch  />
      <span className="font-mono rounded-3xl bg-white w-3/4 p-4 text-2xl h-48 border border-8 border-orange-400 border-dashed text-[#011242] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi culpa eos explicabo laudantium voluptatem perspiciatis minus adipisci aut reprehenderit ex suscipit quos nesciunt laboriosam, nostrum deleniti a accusamus eius. Asperiores?</span>
      <div className="grid grid-cols-2 grid-rows-2 gap-20">
        <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
        <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
        <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
        <Button colorScheme='orange' size='lg' className="font-mono w-48 p-4 text-[#011242}">eeeeeee</Button>
      </div>
      <div className="flex gap-8 justify-baseline">
        <Button colorScheme='blue' size='lg' className="font-mono w-36 p-8 text-[#011242}"><FaArrowAltCircleLeft className="w-10 h-10"/></Button>
        <Button colorScheme='blue' size='lg' className="font-mono w-36 p-8 text-[#011242}"><FaArrowAltCircleRight className="w-10 h-10"/></Button>
      </div>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GiRocketFlight } from "react-icons/gi";
import Capture from "../../assets/Capture.jpg"
import { Button } from '@chakra-ui/react'
// import { LightModeContext } from "../context/lightMode";
// import Switch from '../base/swichMode/swichMode'
import Loader from '../base/rocket/roket';

export default function StartComponent() {
  const [loader, setLoader] = useState(false)
  // const { lightMode, setLightMode } = useContext(LightModeContext);
  const navigator = useNavigate();
  const loaderHandler = (): void => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      navigator("/SetUpPage");
    }, 3000);
  };
  return (
    <div className='w-full h-screen'>
      {loader && (
        <div className="bg - black h-screen w-full absolute inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <div className= "p-16 w-full h-screen flex flex-col gap-10 items-center text-white bg-[#011242]">
        {/* <Switch onClick={() => setLightMode(!lightMode)} /> */}
        <img src={Capture} alt="" className='w-64 h-64 mt-0 transition animate-pulse' />
        <h1 className='text-white text-7xl m-4 relative h-20 font-mono before:absolute before:inset-0 before:bg-[#011242] before:animate-typewriter'>Welcome To Quiz App</h1>
        <Button onClick={loaderHandler} colorScheme='orange' rightIcon={<GiRocketFlight className='w-10 h-10' />} className='w-56 p-8 font-mono transition-all duration-500 ease-in-out transform hover:scale-110'>Lets Start...</Button>
      </div>

    </div>
  )
}

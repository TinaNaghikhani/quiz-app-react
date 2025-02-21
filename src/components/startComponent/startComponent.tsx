import React, { useContext, useState } from 'react'
import { GiRocketFlight } from "react-icons/gi";
import Capture from "../../assets/Capture.jpg"
import { Button, useSafeLayoutEffect } from '@chakra-ui/react'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { LightModeContext } from "../context/lightMode";
import Switch from '../base/swichMode/swichMode'
import Loader from '../base/rocket/roket';

export default function StartComponent() {
  const [loader, setLoader] = useState(false)
  //const { lightMode, setLightMode } = useContext(LightModeContext);

  const loaderHandler = () => {
    setLoader(true);
    setTimeout(() => setLoader(false), 3000);

  }
  return (
    <div className='w-full h-screen'>
      {/* نمایش لودر در مرکز صفحه در صورت فعال بودن */}
      {loader && (
        <div className="h-screen w-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <div className='w-full h-screen flex flex-col gap-4 items-center bg-[#011242]'>
        <Switch />
        {/* <button onClick={() => setLightMode(!lightMode)}>
        {lightMode ? (
          <MdOutlineLightMode className="text-yellow-500 w-8 h-8" />
        ) : (
          <MdOutlineDarkMode className="text-white w-8 h-8" />
        )}
         </button> */}
        <img src={Capture} alt="" className='w-40 h-40 mt-0 transition animate-pulse' />
        <h1 className='text-white text-5xl m-2 relative h-20 font-mono before:absolute before:inset-0 before:bg-[#011242] before:animate-typewriter'>Welcome To Quiz App</h1>
        <Button onClick={loaderHandler} colorScheme='orange' rightIcon={<GiRocketFlight className='w-10 h-10' />} className='w-56 p-8 mb-4 font-mono transition-all duration-500 ease-in-out transform hover:scale-110'>Lets Start...</Button>
      </div>

    </div>
  )
}

import Capture from "../../assets/Capture.jpg"
import { Button } from '@chakra-ui/react'
import Switch from '../base/swichMode/swichMode'



export default function ResultComponent() {
  return (
    
    <div className='mt-0 w-full h-screen flex flex-col gap-8 items-center bg-[#011242]'>
        <div className="w-full h-1/5 flex justify-between">
        <Switch />
        <img src={Capture} alt="" className='w-24 h-24 m-8 transition duration-75 animate-spin' />
        </div>

      <span className="bg-white w-64 h-64 rounded-full" >🥺 🤭 </span>
      <p className="text-3xl text-orange-300 font-semibold">try again good job not bad</p>
      <p className="text-3xl text-orange-300 font-semibold">your Score:</p>
        <Button colorScheme='orange' className='m-8 w-56 p-8 font-mono transition-all duration-500 ease-in-out transform hover:scale-110'>Lets Start...</Button>
    </div>
  )
}



export default function SetUpComponent() {
  return (
    <div className='w-full h-screen flex flex-col gap-8 justify-center items-center bg-[#011242]'>
      <div className='w-full flex flex-col gap-8 justify-center items-center'>
        <label htmlFor="input" className='text-white font-bold text-2xl font-mono'>Enter Number Of Q:</label>
        <input type="text" name="" id="" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono' />
      </div>
      <div className='w-full flex flex-col gap-8 justify-center items-center' >
        <p className='text-white font-bold text-2xl font-mono'>
          Chose Category:
        </p>
        <select name="Chose Category" id="" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono'>
          <option value=""></option>
        </select>
      </div>
      <div className='w-full flex flex-col gap-8 justify-center items-center' >
        <p className='text-white font-bold text-2xl font-mono'>
          dificulty:
        </p>
        <select name="dificulty" className='w-1/2 rounded-full bg-orange-400 p-4 text-[#011242] font-semibold text-xl font-mono'>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="esay">ESAY</option>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="medium">MEDIUM</option>
          <option className='w-1/2 rounded-full bg-orange-200 p-4 text-[#011242] font-semibold text-xl font-mono' value="hard">HARD</option>
        </select>
      </div>


    </div>
  )
}

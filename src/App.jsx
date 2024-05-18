import './index.css'

function App() {


  return (
    <>
    <div className='flex w-[90%] m-auto justify-between'>

      <div className='w-[45%] p-16'>
        <div > 

          <h2 className="text-slate-900 font-bold text-6xl  font-poppins">YOUR FEET
            DESERVE THE BEST</h2>
          <p className='w-[95%] text-sm font-bold '>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="btn flex gap-5 mt-4">
            <button className='px-2 py-1 bg-red-600 text-sm text-white '>Shop Now</button>
            <button className='px-2 py-1 border-solid border-[1px] border-slate-800 rounded-sm'>Category</button>
          </div>
        </div>
      </div>
        <div className='w-[45%]'>
          <img className='h-[487px] w-[520px]' src="./src/assets/shoe_image.png" alt=" shoes" />
        </div>
    </div>
    </>
  )
}

export default App

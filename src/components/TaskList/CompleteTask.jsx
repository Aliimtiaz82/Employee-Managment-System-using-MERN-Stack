import React from 'react'

const CompleteTask = () => {
  return (
    <div className="w-[300px]  flex-shrink-0 h-full bg-green-400 hover:bg-green-500  hover:scale-[1.01] rounded-2xl ">
      <div className="flex  justify-between items-center p-3 text-white font-semibold">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4>21-04-2024</h4>
      </div>
      <h2 className="text-2xl text-white font-semibold p-3">bdjkakdqvw</h2>
      <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, alias.</p>
      <div className="flex  p-3 mt-10 text-green-500 font-bold justify-center">
        <button className="py-2 px-4 items-center bg-stone-100 rounded-sm ">Completed</button>
      </div>
    </div>
  )
}

export default CompleteTask

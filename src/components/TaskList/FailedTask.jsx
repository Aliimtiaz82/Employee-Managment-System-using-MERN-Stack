

const FailedTask = ({data}) => {
  return (
    <div className="w-[300px]  flex-shrink-0 h-full bg-red-400 hover:bg-red-500  hover:scale-[1.01] rounded-2xl ">
      <div className="flex  justify-between items-center p-3 text-white font-semibold">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl text-white font-semibold p-3">{data.taskTitle}</h2>
      <p className="text-white p-3">{data.taskDescription}</p>
      <div className="flex  p-3 mt-10 text-red-500 font-bold justify-center">
        <button className="py-2 px-4 items-center bg-stone-100 rounded-sm ">Failed</button>
      </div>
    </div>
  )
}

export default FailedTask

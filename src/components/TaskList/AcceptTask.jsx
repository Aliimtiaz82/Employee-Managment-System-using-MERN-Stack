

const AcceptTask = ({data}) => {
  return (
    <div className="w-[300px]  flex-shrink-0 h-full bg-yellow-400 hover:bg-yellow-500  hover:scale-[1.01] rounded-2xl ">
      <div className="flex  justify-between items-center p-3 text-white font-semibold">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="text-2xl text-white font-semibold p-3">{data.taskTitle}</h2>
      <p className="text-white p-3">{data.taskDescription}</p>
      <div className="flex justify-between p-3 mt-10 text-white font-bold">
        <button className="py-2 px-4 bg-green-500 rounded-sm ">Accept</button>
        <button className="py-2 px-4 bg-red-500 rounded-sm ">Reject</button>
      </div>
    </div>
  )
}

export default AcceptTask

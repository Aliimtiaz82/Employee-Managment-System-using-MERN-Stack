

const AcceptTask = () => {
  return (
    <div className="w-[300px]  flex-shrink-0 h-full bg-yellow-400 hover:bg-yellow-500  hover:scale-[1.01] rounded-2xl ">
      <div className="flex  justify-between items-center p-3 text-white font-semibold">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
        <h4>21-04-2024</h4>
      </div>
      <h2 className="text-2xl text-white font-semibold p-3">bdjkakdqvw</h2>
      <p className="text-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, alias.</p>
      <div className="flex justify-between p-3 mt-10 text-white font-bold">
        <button className="py-2 px-4 bg-green-500 rounded-sm ">Accept</button>
        <button className="py-2 px-4 bg-red-500 rounded-sm ">Reject</button>
      </div>
    </div>
  )
}

export default AcceptTask

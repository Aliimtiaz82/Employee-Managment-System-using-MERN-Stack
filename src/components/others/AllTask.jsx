import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'; 

const AllTask = () => {
  const authData = useContext(AuthContext); 

  return (
    <>
    <div className='w-full hidden md:flex mt-15 bg-amber-300  p-4 rounded text-white font-semibold'>
      <div className='w-1/5'>Employee Name</div>
      <div className='w-1/5'>New Task</div>
      <div className='w-1/5'>Active Task</div>
      <div className='w-1/5'>Completed</div>
      <div className='w-1/5'>Failed</div>
    </div>
    <div className="w-full scrollbar-hide space-y-6 rounded bg-gray-50 shadow-xl/30 ring-1 ring-indigo-100 p-10  h-70 overflow-auto ">
      {authData.employees.map((employee, index) => (
        <div key={index} className=" text-xl border-2 border-green-300 rounded-lg flex w-full md:justify-between p-3 mb-3 flex-col md:flex-row hover:scale-[1.02] hover:transition-all  hover:duration-500 hover:shadow-2xl hover:cursor-pointer hover:border-dashed hover:border-indigo-500 " >
          <h2 className='w-1/5 ' >{employee.firstName}</h2>
          <h2 className='w-1/5 text-blue-400'>{employee.taskCounts.newTask}</h2>
          <h2 className='w-1/5 text-amber-400'>{employee.taskCounts.active}</h2>
          <h2 className='w-1/5 text-green-400'>{employee.taskCounts.completed}</h2>
          <h2 className='w-1/5 text-red-400'>{employee.taskCounts.failed}</h2>
        </div>
      ))}
    </div>
     </>
  );
};

export default AllTask;

import Header from "../others/Header"
import EmployeeCard1 from "../others/EmployeeCard1"

const EmployeeDashboard = () => {

    const Data = [{
        color : 'bg-blue-400',
        hover : 'hover:bg-blue-500',
        Name : 'New Task',
        Number : 3
    }, { 
        color : 'bg-green-400',
        hover : 'hover:bg-green-500',
        Name : 'Completed Task',
        Number : 10
    },{
        color : 'bg-yellow-400',
        hover : 'hover:bg-yellow-500',
        Name : 'Accepted Task',
        Number : 4
    },{
        color : 'bg-red-400',       
        hover : 'hover:bg-red-500',
        Name : 'Failed Task',
        Number : 0
    } 
]
  return (
    <>
    <Header></Header>
    <div className='grid lg:grid-cols-4 gap-2'>
        {Data.map((data) => ( 
            <EmployeeCard1 data = {data}></EmployeeCard1>
        ))} 
    </div> 
    
    </>
  )
}

export default EmployeeDashboard

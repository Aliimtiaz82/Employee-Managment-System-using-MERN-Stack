

const EmployeeCard1 = ({data }) => {
  return (
    <>
    <div className={`p-5 ${data.color} ${data.hover} rounded-lg text-white text-2xl font-semibold `}>
        <p >{data.Number}</p>
        <p>{data.Name}</p>
    </div> 
    </>
  )
}  

export default EmployeeCard1

import Header from "../others/Header";
import EmployeeCard1 from "../others/EmployeeCard1";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ Empdata  ,logout}) => {
  const Data = [
    {
      color: "bg-blue-400",
      hover: "hover:bg-blue-500",
      Name: "New Task",
      Number: Empdata.taskCounts.newTask,
    },
    {
      color: "bg-green-400",
      hover: "hover:bg-green-500",
      Name: "Completed Task",
      Number: Empdata.taskCounts.completed,
    },
    {
      color: "bg-yellow-400",
      hover: "hover:bg-yellow-500",
      Name: "Accepted Task",
      Number: Empdata.taskCounts.active,
    },
    {
      color: "bg-red-400",
      hover: "hover:bg-red-500",
      Name: "Failed Task",
      Number: Empdata.taskCounts.failed,
    },
  ];
  return (
    <>
      <Header logout={logout} data={Empdata}></Header>
      <div className="grid   md:grid-cols-2  lg:grid-cols-4 gap-2 ">
        {Data.map((data) => (
          <EmployeeCard1  data={data}></EmployeeCard1>
        ))}
      </div>
      <TaskList Empdata={Empdata} ></TaskList>
    </>
  );
};

export default EmployeeDashboard;

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ Empdata }) => {
  return (
    <div
      id="TaskList"
      className="mt-10 p-2 w-full h-75 flex gap-5 overflow-x-auto flex-nowrap items-center justify-start"
    >
    
      {Empdata.tasks.map((elem, index) => {
     if (elem.newTask) {
    return <NewTask key={index} data={elem} />;
  } else if (elem.active) {
    return <AcceptTask key={index} data={elem} />;
  } else if (elem.completed) {
    return <CompleteTask key={index} data={elem} />;
  } else if (elem.failed) {
    return <FailedTask key={index} data={elem} />;
  } else {
    return null;
  }
      })} 
    </div>
  );
};

export default TaskList;

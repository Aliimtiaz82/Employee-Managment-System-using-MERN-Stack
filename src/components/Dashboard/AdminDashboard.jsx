
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({logout}) => {
  return (
    <div>
    <Header logout={logout} ></Header>
    <Createtask></Createtask>
    <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;

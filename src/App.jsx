import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  return (
    <>
    <div className="p-3 w-full ">
    <Login></Login>
    {/* <EmployeeDashboard></EmployeeDashboard> */}
    {/* <AdminDashboard></AdminDashboard> */}
    </div> 
    </>
  )
}

export default App



import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage , getLocalStorage } from "./utils/localStorage";
import TaskList from "./components/TaskList/TaskList";

const App = () => {

  // useEffect(() => {
  //  setLocalStorage();
  //  getLocalStorege();
  //   },);
    
  const authdata = useContext(AuthContext);

  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (!authdata) {
      alert("Auth data not loaded.");
      return;
    }

    // Admin login
    const admin = authdata.admin?.find(
      (a) => a.email === email && a.password === password
    );
    if (admin) {
      setUser("admin");
      return;
    }

    // Employee login
    const employee = authdata.employees?.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      console.log("✔ Employee logged in:", employee);
    } else {
      alert("Invalid Credentials");
    }
  }; 

  // Debug: track when user data is updated
  useEffect(() => {
    if (loggedInUserData) {
      console.log("Updated state:", loggedInUserData);
    }
  }, [loggedInUserData]);

  return (
    <div className="p-3 w-full">
      {!user ? (
        <Login handlelogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard Empdata={loggedInUserData} />
      )}
    </div>
  );
};

export default App;





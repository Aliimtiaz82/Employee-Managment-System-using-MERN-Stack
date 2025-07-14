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

  // Admin Login
  const admin = authdata.admin?.find(
    (a) => a.email === email && a.password === password
  );
  if (admin) {
    setUser("admin");
    setLoggedInUserData(admin); 
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    return;
  }

  // Employee Login
  const employee = authdata.employees?.find(
    (e) => e.email === email && e.password === password
  );
  if (employee) {
    setUser("employee");
    setLoggedInUserData(employee);
    localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee }));
    return;
  }

  alert("Invalid Credentials");
};

  // Debug: track when user data is updated
useEffect(() => {
  const loggedInUserData = localStorage.getItem("loggedInUser");
  if (loggedInUserData) {
    const userData = JSON.parse(loggedInUserData);
    setUser(userData.role);
    setLoggedInUserData(userData.data || null);
  }
}, []);

// logout Feature 

const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  setUser(null);
  setLoggedInUserData(null);
};

return (
  <div className="p-3 w-full">
    {!user ? (
      <Login handlelogin={handleLogin} />
    ) : user === "admin" ? (
      <AdminDashboard logout={handleLogout} />
    ) : (
      <EmployeeDashboard logout={handleLogout} Empdata={loggedInUserData} />
    )}
  </div>
);

};

export default App;





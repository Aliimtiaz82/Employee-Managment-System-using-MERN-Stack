import {  createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

const [authData , setAuthdata] = useState(null)

useEffect(() => {
  const {employees  , admin} = getLocalStorage()
  setAuthdata({employees , admin})
} , [])


  return (
      <AuthContext.Provider value={[authData , setAuthdata]}>
        {children}
      </AuthContext.Provider>  
  )
}

export default AuthProvider


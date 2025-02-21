import { useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashboard'
import AdminDashBoard from './components/Dashboard/AdminDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      {/* <EmployeeDashBoard/> */}
      {/* <AdminDashBoard/> */}
    </>
  )
}

export default App

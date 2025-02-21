import { useState } from 'react'
import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../tasklist/TaskList'
function EmployeeDashBoard() {
    
  
    return (
      
       <div className='bg-[#1c1c1c]  h-screen px-10 py-5'>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
       </div>
      
    )
  }
  
  export default EmployeeDashBoard
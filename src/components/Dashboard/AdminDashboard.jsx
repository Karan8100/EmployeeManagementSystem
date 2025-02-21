import React from "react";
import Header from "../Others/Header";
import Alltask from "../Others/Alltask";
const AdminDashBoard = ()=>{

    return(
        <div className="h-screen bg-[#1c1c1c] p-5">
            <Header/>
            {/* admin dashboard */}
            <div className="flex gap-10 mt-5">
            
             <div className="border-1 border-white rounded-lg bg-black  w-[50%] p-5 ">
               <form action="" className="flex flex-col gap-2">
                <div>
                    <h3 className="font-medium text-lg mb-0.5">Task title</h3>
                    <input type="text" placeholder="Enter task" 
                    className="bg-gray-900 px-2 rounded placeholder:text-gray-400 py-1 w-full"/>
                </div>
                <div>
                    <h3 className="font-medium text-lg mb-0.5">Description</h3>
                    <textarea name="" id="" placeholder="Enter description"className="bg-gray-900 px-2 py-1 rounded placeholder:text-gray-400 w-full"></textarea>
                </div>
                <div>
                    <h3 className="font-medium text-lg mb-0.5">Date</h3>
                    <input type="date" name="" id="" className="bg-gray-900 px-2 rounded text-gray-400 py-1"/>
                </div>
                <div>
                    <h3 className="font-medium text-lg mb-0.5">Assign to</h3>
                    <input type="text" name="" id="" 
                    className="bg-gray-900 px-2 rounded placeholder:text-gray-400 py-1  w-full" 
                    placeholder="Employee name"/>
                </div>
                <div className="">
                    <h3 className="fond-medium text-lg mb-0.5">Category</h3>
                    <input type="text" name="" id="" 
                    className="bg-gray-900 px-2 rounded placeholder:text-gray-400 py-1  w-full" 
                    
                    placeholder="design, dev ,etc"/>
                </div>
                <button className="w-full bg-red-500 rounded hover:bg-red-600 py-2 mt-2">Create task</button>
                 
             </form>
             </div>
            
            <Alltask/>
          </div>
        </div>
    )
}
export default AdminDashBoard
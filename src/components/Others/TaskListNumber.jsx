import React from "react";
const TaskListNumber = ()=>{
    return(
        <div className="flex justify-between gap-5 mt-10 screen ">
           <div className=" w-[45%] bg-red-400  rounded-xl px-5 py-5 ">
             <h2 className="font-semibold text-2xl">0</h2>
             <h3 className="text-xl font-medium">new task</h3>
           </div>
           <div className=" w-[45%] bg-yellow-400  rounded-xl px-5 py-5 ">
             <h2 className="font-semibold text-2xl">0</h2>
             <h3 className="text-xl font-medium">completed Task</h3>
           </div>
           <div className=" w-[45%] bg-blue-400  rounded-xl px-5 py-5 ">
             <h2 className="font-semibold text-2xl">0</h2>
             <h3 className="text-xl font-medium">Accepted Task</h3>
           </div>
           <div className=" w-[45%] bg-green-400  rounded-xl px-5 py-5 ">
             <h2 className="font-semibold text-2xl">0</h2>
             <h3 className="text-xl font-medium">Failed Task</h3>
           </div>
        </div>
    )
}
export default TaskListNumber
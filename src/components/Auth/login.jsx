import React, { useState } from "react";

function Login(){
    const [email , setemail] = useState('')
    const [password,setpassword] = useState('')

    const submitHandler = (e)=>{
         e.preventDefault();
         setemail("")
         setpassword("")
    }
    return(
        <>
         <div className="flex h-screen w-screen items-center justify-center">
             <div className="border-2 border-red-500 px-5 rounded-3xl  ">
                <div className="text-center text-2xl mb-10 py-6">Login</div>
                <form onSubmit={submitHandler} action="" className="flex flex-col gap-2 items-center justify-center mx-8 py-4">
                    <input type="email" 
                    placeholder="Enter  email"
                    value = {email} 
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    className="border-2 border-emerald-500 py-2 
                    rounded-3xl bg-transparent outline-none
                     text-white w-[250px] placeholder:text-white px-4
                     " />

                    <input type="password" 
                    value = {password}
                    onChange={(e)=>{
                          setpassword(e.target.value)
                    }}
                    placeholder="Enter password" 
                    className="border-2 border-emerald-500 py-2 
                    rounded-3xl bg-transparent outline-none
                     text-white w-[250px] placeholder:text-white  px-4
                     " />

                    <button className="bg-red-500 text-white py-2 px-4 rounded-3xl mb-10 w-[250px] hover:bg-red-600">Log in</button>
                </form>
             </div>
         </div>
        </>
    )
}

export default Login
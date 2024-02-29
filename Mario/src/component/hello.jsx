import React from 'react'

const hello = () => {
  return (
    <div>
        <div className='bg-red-600 w-full  h-screen grid justify-items-center items-center '>
         <div className='h-3/5 w-2/3  bg-red-200 rounded-xl' >
            <h1 className='text-3xl text-center ' >Login</h1> <br />
            <div className=' flex flex-col gap-7' >
                <div className='p-3 flex gap-20'>
                    <h1 className='py-3'>Name:</h1> 
                    <input placeholder='Enter Your Name' className='text-2xl rounded w-200 h-12' type="text" />
                </div>
                <div className='p-3 flex gap-20'>
                    <h1 className='py-3'>Password</h1> 
                    <input placeholder='Enter Your Password' className='text-2xl placeholder:text-state-400 rounded w-200 h-12' type="text" />
                </div>
                <button className='bg-red-500 rounded'>Submit</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default hello

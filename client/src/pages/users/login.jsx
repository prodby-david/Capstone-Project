import React from 'react'

const Login = () => {

  return (

    <div className='flex flex-col justify-center items-center min-h-screen p-5'>

      <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-md p-7 bg-white w-full max-w-sm'>

        <h1 className='text-4xl font-bold text-color'>HanaPark</h1>
        <p className='mt-px text-color-2'>Parking System</p>

        <form className='my-10 w-full max-w-sm flex flex-col items-center justify-center'>

            <div className='flex flex-col gap-y-4 w-full'>

                <input type="text"
                name='username'
                id='username'
                placeholder='Username'
                className='p-3 outline-0 border border-gray-300 rounded-md w-full text-sm'
                />  

                <input type="password"
                name='password'
                id='passowrd'
                placeholder='Password'
                className='p-3 outline-0 border border-gray-300 rounded-md w-full text-sm' 
                />

            </div>

            <button className='p-3 mt-5 bg-color text-white rounded-md w-full hover:bg-color-3 cursor-pointer transition-all duration-200 ease-in-out'>
                Login
            </button>

        </form>

         <a href="" className='text-sm text-color-3 mt-3 hover:text-color-1 transition-all duration-200 ease-in-out '>
                Forgot password?
            </a>

      </div>
    </div>
  )
}

export default Login;

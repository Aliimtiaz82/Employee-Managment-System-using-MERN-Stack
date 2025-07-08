import React, { useRef, useState } from 'react'

const Login = ({handlelogin}) => {



    let [email  , setEmail] = useState('')
    let [password  , setPassword] = useState('')

    const handleChange = (event) =>{
        event.preventDefault(); 
        
        handlelogin(email , password)
        console.log("your email is " + email);
        console.log('ypur pass is ' + password)
       
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex justify-center'>
    <div className='flex md:w-1/2  md:mt-20 w-full place-items-center   bg-stone-100  rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500'>
        <div className='lg:w-1/2 2xl:w-full w-full p-5 '> 
            <div>
                <p className='text-blue-900 font-bold text-4xl'>Login</p>
                <p className='text-blue-500 mt-3'>if you have an account please login</p>
            </div>
            <div>
                <form onSubmit={(e) => {handleChange(e)}} className='mt-5 flex  flex-col' > 
                    <label htmlFor="email" >Email Address</label>
                    <input required value={email}  onChange={(e) => setEmail(e.target.value)} type="email" className='p-3 bg-stone-200 rounded-lg' name="email" id=""placeholder='Enter Email Address' />
                    <label htmlFor="pass" className='mt-4'>Password</label>
                    <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='p-3 bg-stone-200 rounded-lg' name="pass" id="" placeholder='Enter Password'/>
                    <a href="" className='text-blue-500 text-end my-3'>Forgot Password?</a>
                    <button type='submit' className='bg-blue-500 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:cursor-pointer '>Log in</button>
                </form> 
            </div> 
            <hr className='my-5' />
            <div className=' grid text-center'>
                <a href="" className=' p-3 rounded-lg bg-white text-stone-700 font-semibold hover:bg-stone-50 hover:cursor-pointer   '><i className="fa-brands fa-google"></i> Log in with google</a>
            </div>
        </div>
        <div className='w-1/2 m-2 hidden lg:block'>
            <img className='w-auto rounded-2xl' src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg" alt="" />
        </div>
    </div> 
    </div>
  )
}

export default Login



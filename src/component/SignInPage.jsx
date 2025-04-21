import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const [userDetails, setUserDetails] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]:e.target.value})
  }
  
  const handleSignIn = (e) => {
    e.preventDefault();
    const localData = localStorage.getItem("data");
    if(localData){
      const parseData = JSON.parse(localData)
      
      const userSignInData = parseData.find((data) => data.email === userDetails.email && data.password === userDetails.password);
      
      if(userSignInData){
        localStorage.setItem("UserLogin",JSON.stringify(userSignInData))
        alert("sign in successfully");
        navigate("/")
      }else{
        alert("Invalid email or password");
      }
    }else{
      alert("Create your account");
    }
  }

  return (
    <div>
      <div className='w-[90%] max-w-[500px] m-auto my-16 border border-gray-400 rounded p-10 bg-gray-50'>
      <form>
            <label htmlFor="email">Email:-</label>
            <input type="email" name="email" id="email" value={userDetails.email} onChange={(e) => handleChange(e)} placeholder='Enter email' className='border p-2 w-[100%] rounded border-black' required/><br/><br/>

            <label htmlFor="password">password:-</label>
            <input type="password" name="password" id="password" value={userDetails.password} onChange={(e) => handleChange(e)} placeholder='Enter username' className='border w-[100%] p-2 rounded border-black' required/><br/><br/>

            <p className='text-[20px]'>Don't have an account? <Link to="/signup" className='text-blue-600 cursor-pointer'>Sign Up</Link></p><br/>

            <button type='submit' onClick={handleSignIn} className='border-none px-5 py-2 rounded bg-green-700 text-white text-[20px]'>Sign In</button>
      </form>
        </div>
    </div>
  )
}

export default SignInPage

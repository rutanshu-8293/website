import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const [userDetails, setUserDetails] = useState({
        userName:"",
        email:"",
        password:"",
        cpassword:""
    })
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        const storeData = localStorage.getItem("data")
        if(storeData){
            setUserData(JSON.parse(storeData))
        }
    },[])

    const handleReset = () => {
        setUserDetails({
            userName:"",
            email:"",
            password:"",
            cpassword:""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const existingEmail = userData.find((item) => item.email === userDetails.email);
        if(existingEmail){
            alert("Email already exists.")
            return;
        }
        
        if(userDetails.password !== userDetails.cpassword){
            alert("password is not match")
            return;
        }

        const arr = [...userData]
        arr.push(userDetails)
        setUserData(arr)
        localStorage.setItem("data",JSON.stringify(arr))
        alert("sign up successfully")
        handleReset()

        navigate("/signin")
    }
    
  return (
    <div>
        <div className='w-[90%] max-w-[500px] m-auto my-10 border border-gray-400 rounded p-6 bg-gray-50'>
           <form onSubmit={handleSubmit}>
           <label htmlFor="userName">Username:-</label>
            <input type="text" name="userName" id="userName" value={userDetails.userName} onChange={(e) => handleChange(e)} placeholder='Enter username' className='border w-[100%] p-2 rounded border-black' required/><br/><br/>

            <label htmlFor="email">Email:-</label>
            <input type="email" name="email" id="email" value={userDetails.email} onChange={(e) => handleChange(e)} placeholder='Enter email' className='border p-2 w-[100%] rounded border-black' required/><br/><br/>

            <label htmlFor="password">Password:-</label>
            <input type="password" name="password" id="password" value={userDetails.password} onChange={(e) => handleChange(e)} placeholder='Enter password' className='border p-2 w-[100%] rounded border-black' required/><br/><br/>

            <label htmlFor="cpassword">Confirm Password:-</label>
            <input type="password" name="cpassword" id="cpassword" value={userDetails.cpassword} onChange={(e) => handleChange(e)} placeholder='Enter confirm password' className='border p-2 rounded w-[100%] border-black' required/><br/><br/>
 
            <p className='text-[20px]'>Already have an account? <Link to="/signin" className='text-blue-600 cursor-pointer'>Sign in</Link></p><br/>

            <button type='submit' className='border-none px-5 py-2 rounded bg-green-700 text-white text-[20px]'>Sign Up</button>
            
            <button type='reset' onClick={handleReset} className='bg-blue-800 text-white px-5 py-2 rounded text-[20px] ml-4'>Reset</button>

           </form>
        </div>
    </div>

  )
}

export default SignUpPage

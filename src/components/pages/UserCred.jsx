import React, { useState } from 'react'
import Images from '../Images'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


const UserCred = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const navigator = useNavigate()
    const handleGoTo = (e) => {
        e.preventDefault()
        if (email == "" || password == "") {
            toast.error('Credentials missing!')
        }
        else {
            navigator("/app")
        }
    }
    return (
        <>
            <div className="m-auto h-screen flex justify-center items-center">
                <div className="p-4 w-[600px] border-2 flex justify-between items-center">
                    <div className="w-[50%] border-r-2  text-center p-2">
                        <Images src={logo} />
                    </div>
                    <div className="w-[50%] text-center p-2">
                        <form action="">
                            <input onChange={handleEmail} type="email" className='border-b focus:outline-0 placeholder:font-bold placeholder:font-Arimo font-Arimo' placeholder='Enter your email' />
                            <br />
                            <input onChange={handlePass} type="password" className='border-b focus:outline-0 mt-[40px] placeholder:font-bold placeholder:font-Arimo font-Arimo' placeholder='Enter your password' />
                            <br />
                            <button onClick={handleGoTo} className='mt-[40px] p-5 bg-blue-700 text-white font-Arimo font-bold cursor-pointer'>Log in</button>
                        </form>
                        <Toaster />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCred

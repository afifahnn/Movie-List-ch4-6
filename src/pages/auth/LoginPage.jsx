import React, { useEffect } from 'react'
import { useState } from 'react'
import { reduxLoginUser, useLoginUser } from '../../services/auth/login_user'
import { Link, useNavigate } from 'react-router-dom'
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import GoogleLogin from '../../assets/components/GoogleLogin'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../redux/actions/authLogin'

export const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [getErrMsg, setErrMsg] = useState("");

    // const { mutate: loginUser, status, isSuccess, error } = useLoginUser()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleInput = (e) => {
      if (e) {
        if (e.target.id === "email") {
          setEmail(e.target.value)
        }
        if (e.target.id === "password") {
          setPassword(e.target.value)
        }
      }
    }

    const ClickPass = () => {
      setShowPassword(!showPassword);
    };

    // useEffect(() => {
    //   if (error) {
    //     toast(error.response.data.message, {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    //   }
    //   if (isSuccess) {
    //     navigate("/Home");
    //   }
    // }, [status]);

    const login = async () => {
      const dataLogin = await dispatch(LoginUser({
        email : Email,
        password : Password
      }))
      if (dataLogin) {
        navigate("/Home")
      } else if (Email === "") {
        toast("Email is required", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        })
      } else if (Password === "") {
        toast("Password is required", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        })
      } else {
        toast("Your Email or Password doesn't match", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        })
      }
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400'>
      <div className='flex flex-col justify-center items-center space-y-4 py-[4rem] px-[2rem] tablet:px-[3rem] rounded-lg bg-slate-100 shadow-lg'>
        <div className='text-[1.5rem] font-bold'>LOGIN</div>
        <div className='space-y-3'>
            <div className='flex justify-between items-center border-2 tablet:w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><GrMail size={20}/></div>
                <input onChange={handleInput} id='email' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type='text' placeholder='Email'/>
            </div>
            <div className='flex justify-between items-center border-2 tablet:w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><RiLockPasswordFill size={20}/></div>
                <input onChange={handleInput} id='password' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type={showPassword ? "text" : "password"} placeholder='Password'/>
                <button onClick={ClickPass}>
                  {showPassword ? (<BiSolidHide size={20}/>) : (<BiSolidShow size={20}/>)}
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center rounded-3xl w-[10rem] h-[2.5rem] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 shadow-md hover:opacity-80'>
            <button onClick={() => {login()}} className='w-full h-full text-white shadow-2xl'>Login Account</button>
        </div>
        <div>
          <GoogleLogin buttonText="Login with Google"/> 
        </div>
        <div className='flex gap-1 tablet:gap-2'>
            <div>Don't have an account yet?</div>
            <Link to={'/Register'}>
                <button className='text-red-900 hover:underline'>Register</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

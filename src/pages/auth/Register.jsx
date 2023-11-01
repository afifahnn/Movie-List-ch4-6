import React, { useEffect } from "react";
import { useState } from "react";
import { useCreateUser } from "../../services/auth/register_user";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from 'react-icons/gr'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from "react-toastify";

export const Register = () => {
  // const [Username, setUsername] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const { mutate: registerUser, status, isSuccess, error } = useCreateUser();

  const navigate = useNavigate();

  const ClickPass = () => {
    setShowPassword(!showPassword);
  };

  const ClickPassConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  useEffect(() => {
    if (error) {
      toast(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [status]);

  const register = () => {
    if (ConfirmPass === Password) {
      if (FirstName.trim() === "") {
        toast("First name is required", {
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
        const Username = `${FirstName}` + `${LastName}`;
        registerUser({
          email: Email,
          name: Username,
          password: Password
        });
      }
    } else {
      toast("Your password confirmation doesn't match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "firstName") {
        setFirstName(e.target.value + " ");
      }
      if (e.target.id === "lastName") {
        setLastName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "confirmPass") {
        setConfirmPass(e.target.value);
      }
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400'>
        <div className='flex flex-col justify-center items-center space-y-4 py-[4rem] px-[3rem] rounded-lg bg-slate-100 shadow-lg'>
        <div className='text-[1.5rem] font-bold'>REGISTER</div>
        <div className='space-y-3'>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><FaUserAlt size={20}/></div>
                <input onChange={handleInput} id='firstName' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type='text' placeholder="First Name"/>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><FaUserAlt size={20}/></div>
                <input onChange={handleInput} id='lastName' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type='text' placeholder="Last Name"/>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><GrMail size={20}/></div>
                <input onChange={handleInput} id='email' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type='text' placeholder="Email"/>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><RiLockPasswordFill size={20}/></div>
                <input onChange={handleInput} id='password' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type={showPassword ? "text" : "password"} placeholder="Password"/>
                <button onClick={ClickPass}>
                  {showPassword ? (<BiSolidHide size={20}/>) : (<BiSolidShow size={20}/>)}
                </button>
            </div>
            <div className='flex justify-between items-center border-2 w-[20rem] h-[3rem] py-1 px-4 rounded-3xl shadow-lg border-slate-300'>
                <div><RiLockPasswordFill size={20}/></div>
                <input onChange={handleInput} id='confirmPass' className='border-none focus:outline-none focus:ring-0 h-full w-full bg-transparent placeholder:italic' type={showPassConfirm ? "text" : "password"} placeholder="Password Confirmation"/>
                <button onClick={ClickPassConfirm}>
                  {showPassConfirm ? (<BiSolidHide size={20}/>) : (<BiSolidShow size={20}/>)}
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center rounded-3xl w-[10rem] h-[2.5rem] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400 shadow-md hover:opacity-80'>
            <button onClick={() => {register()}} className='w-full h-full text-white shadow-2xl'>Create Account</button>
        </div>
        <div className='flex gap-2'>
            <div>Already have an account?</div>
            <Link to={'/'}>
              <button className='text-red-900 hover:underline'>Login</button>
            </Link>
        </div>
        </div>
    </div>
  );
};

import React from "react";
import {useState} from "react";
import { AiOutlineEyeInvisible} from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const SignupPage = ({setLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accType, setAccType] = useState('student');

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, 
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return ;
        }

        // if execution reachers here means form is successfully submited
        setLoggedIn(true);
        toast.success("Account Created Successfully");
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                className={`${accType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ () => setAccType("student")}>
                    Student
                </button>
                <button 
                className={`${accType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex w-full justify-between mt-[20px]">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div> 

                <div className="mt-[20px]">
                    <label className="w-full justify-between">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Email Address"
                            value={formData.email}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>

                <div className="flex w-full justify-between mt-[20px]">
                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={ () => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)} </span>
                    </label>

                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler} 
                            placeholder="Re-Enter Password"
                            value={formData.confirmPassword}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={ () => setShowConfirmPassword((prev) => !prev)}>{showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)} </span>
                    </label>
                </div>   

                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack px-[12px] py-[8px] mt-6">
                    Create Account
                </button> 
            </form>
        </div>
    )
}

export default SignupPage;
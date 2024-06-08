import React from "react";
import loginImg from "../assets/login.png"
import Template from "../components/Template"

const Login = ({setLoggedIn}) => {

    return (
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tommorrow and beyond."
            desc2="Education to future-proof your career"
            image={loginImg}
            formtype="login"
            setLoggedIn={setLoggedIn}
        />
    )
}

export default Login;
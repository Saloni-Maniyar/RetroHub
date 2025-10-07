import { useState,useContext } from "react";
import { handleLogin } from "../services/Validations/handleLogin";
import "../styles/Login.css";
import {loginApi} from "../services/ApiHandlers/loginApi"
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { resendVerificationApi } from "../services/ApiHandlers/resendVerificationApi";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [loginError,setLoginError]=useState('');
    const [loginSuccessMessage,setLoginSuccessMessage]=useState('');
    const {setIsLoggedIn}=useContext(AuthContext);
    const  navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {emailErr,passwordErr}=await handleLogin({ email, password });
         setEmailError(emailErr);
         setPasswordError(passwordErr);
        if(!emailErr && !passwordErr){
      
           try{
            console.log("in login try");
            const data=await loginApi({email,password});
            console.log("data in try:",data);
            setLoginError('');
            setLoginSuccessMessage('Login Successful');
            setIsLoggedIn(true);
            setEmail(''); setPassword('');
            navigate('/');

           }catch(err){
            console.log(err);
            setLoginError(err.response?.data?.message || "Login failed");
            setLoginSuccessMessage('');

           }
      
        }
    };

    const handleResendVerification = async () => {
         try {
                await resendVerificationApi({ email });
                alert("Verification email resent! Please check your inbox.");
         } catch (err) {
                  alert(err.response?.data?.message || "Failed to resend verification email.");
         }
};

    return (
        <div className="Login">
            <div className="LoginMessage">
                {loginError && <p className="loginError">{loginError}
                    {
                    loginError.includes("Please verify your email before logging in.") &&  <>
                    <br />
                    <button
                         onClick={() => handleResendVerification()}
                         className="resend-btn"
                     >
                        Resend Verification Email
                     </button>
                    </>
                    }
                    </p>}
                {loginSuccessMessage && <p className="loginSuccessMessage">{loginSuccessMessage}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error">{passwordError}</p>}

                <button type="submit">Login</button>
                <div className="forgot-link">
                    <span>
                        <a href="#">
                            forgot password?
                        </a>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                        <a href="/Signup">
                            Don't have an account? Signup 
                        </a>
                    </span>
                </div>
            </form>
        </div>
    );
}

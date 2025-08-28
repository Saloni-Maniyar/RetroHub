import { useState } from "react";
import { handleLogin } from "../services/handleLogin";
import "../styles/Login.css";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {emailErr,passwordErr}=await handleLogin({ email, password });
        setEmailError(emailErr);
        setPasswordError(passwordErr);
    };

    return (
        <div className="Login">
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

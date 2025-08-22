import { handleSignup } from "../services/handleSignup";
import { useState } from "react";
export default function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await handleSignup({name,email,password});
        
    }
    return(
        <div className="Signup">
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Enter name" 
                       value={name} 
                       onChange={(e)=>setName(e.target.value)}
                ></input>

                <input type="email" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></input>

                <input type="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                ></input>

                <button type="submit">
                    signup
                </button>
            </form>
            
        </div>
    );
}
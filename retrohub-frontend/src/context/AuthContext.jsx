import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();

export  function AuthProvider({children}){
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');
        setIsLoggedIn(!!token);
    },[]);

    //Logout
    const logout=()=>{
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
        
    };
    return(
        <AuthContext.Provider value={{isLoggedIn,logout,setIsLoggedIn}}>{children}</AuthContext.Provider>
    );
}
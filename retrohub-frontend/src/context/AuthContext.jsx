import { createContext,useEffect,useState,useMemo } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
import PropTypes from "prop-types";


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
    //to resolve sonar issue
    const contextValue = useMemo(
    () => ({ isLoggedIn, logout, setIsLoggedIn }),
    [isLoggedIn] // dependencies
  );
    return(
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
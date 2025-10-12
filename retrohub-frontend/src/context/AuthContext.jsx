import { createContext,useEffect,useState,useMemo } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
import PropTypes from "prop-types";
import {jwtDecode} from "jwt-decode";


export  function AuthProvider({children}){
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate=useNavigate();
    useEffect(() => {
         const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            try{
                const decoded = jwtDecode(storedToken);
                if (decoded.exp * 1000 < Date.now()) {
                    // Token expired
                    sessionStorage.removeItem("token");
                    setToken(null);
                    setIsLoggedIn(false);
                } else {
                     setToken(storedToken);
                     setIsLoggedIn(true);
                 }
            }catch{
                sessionStorage.removeItem("token");
                setToken(null);
                setIsLoggedIn(false);
            }
            
           
     }
    }, []);
   

    

    //Logout
    const logout=()=>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem("user");
        setToken(null);
        setIsLoggedIn(false);
        navigate('/');
        
    };
    //to resolve sonar issue
    const contextValue = useMemo(
    () => ({ isLoggedIn, logout, setIsLoggedIn,token,setToken }),
    [isLoggedIn,token] // dependencies
  );
    return(
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
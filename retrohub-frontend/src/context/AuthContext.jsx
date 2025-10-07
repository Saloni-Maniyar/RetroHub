import { createContext,useEffect,useState,useMemo } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext=createContext();
import PropTypes from "prop-types";


export  function AuthProvider({children}){
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            if (decoded.exp * 1000 < Date.now()) {
            // Token expired
            sessionStorage.removeItem('token');
            setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
      }
     }
    }, []);
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        const token=sessionStorage.getItem('token');
        setIsLoggedIn(!!token);
    },[]);

    //Logout
    const logout=()=>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem("user");
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
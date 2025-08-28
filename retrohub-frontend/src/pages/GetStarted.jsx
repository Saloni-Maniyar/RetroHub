import '../styles/GetStarted.css';
export default function GetStarted(){
    return(
        <div className="GetStarted">
            <h1>Welcome to Retrohub</h1>
            <h4 style={{color:'white'}}>Let's Grow together</h4>
            <a href='/Login'><button>Login</button></a>
            <a href='/Signup'><button>Signup</button></a> 
        </div>
    );
}
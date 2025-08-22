import logoRetro from '../assets/logoRetro.png'
export default function Navbar(){
    return(
        <div className="Navbar">
            <img src={logoRetro} alt="" className='navbar-logo'></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact us</li>
            </ul>
        </div>
    );
    
}
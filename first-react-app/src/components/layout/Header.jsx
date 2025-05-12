import '../../assets/css/header.css';
import logo from '../../assets/images/logo/Abdlmnn Logo.png';

const Header = () => {
    return (
        <header>
            {/* <div class="logo-wrapper"> */}
            <img src={logo} alt="Abdlmnn logo" className='logo'/>
            {/* </div> */}
            <nav>
                <button className='burger' id='bars-button'>
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className="a-tag">
                    <a href="">Home</a>
                    <a href="">About</a>
                    {/* <a href="">Services</a> */}
                    <a href="">Contact</a>
                </div>
                <div className="icon-tag">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-github"></i></a>
                </div>
            </nav>
        </header>
    );
}

export default Header
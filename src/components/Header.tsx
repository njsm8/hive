import './header.style.css';
import headerlogo from '../assets/header-logo.svg';
import call from '../assets/call.svg';

const Header = () => {
    return (
        <header>
            <img className="header-logo" src={headerlogo} alt="Logo" />
            <img className="header-call" src={call} alt="Call" />
        </header>
    );
}

export default Header;
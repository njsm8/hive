import './header.style.css';

const Header = () => {
    return (
        <header>
            <img className="header-logo" src="src/assets/header-logo.svg" alt="Logo" />
            <img className="header-call" src="src/assets/call.svg" alt="Call" />
        </header>
    );
}

export default Header;
import './footer.style.css';
import appStore from '../assets/appstore.svg';
import googlePlay from '../assets/googleplay.svg';
import appleStore from '../assets/applestore.svg';

const Footer = () => {
    return (
        <footer>
            <h2> Download our app now</h2>

            <div className="footer-container">
                <div className="appStore">
                    <img src={appStore} alt="Footer" />
                </div>

                <div className="footer-text">
                    <p> Boost your productivity with the BHIVE Workspace app.</p> <p> Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                    <img
                        className="app-icon"
                        src={googlePlay}
                        alt="Play Store"
                    />
                    <img
                        className="app-icon"
                        src={appleStore}
                        alt="App Store"
                    />
       
                </div>
            </div>
        </footer>
    );
}

export default Footer;
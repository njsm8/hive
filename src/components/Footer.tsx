import './footer.style.css'

const Footer = () => {
    return (
        <footer>
            <h2> Download our app now</h2>

            <div className="footer-container">
                <div className="appStore">
                    <img src="src/assets/appstore.svg" alt="Footer" />
                </div>

                <div className="footer-text">
                    <p> Boost your productivity with the BHIVE Workspace app.</p> <p> Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                    <img
                        className="app-icon"
                        src={"src/assets/googleplay.svg"}
                        alt="Play Store"
                    />
                    <img
                        className="app-icon"
                        src={"src/assets/applestore.svg"}
                        alt="App Store"
                    />
       
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import './hero.style.css'; // Import the CSS file for styling
import officeGuy from '../assets/office-guy.svg'; // Replace with the correct path

const HeroHeader = () => {
  return (
    <div className="hero-header">
        <div className="hero-honeycomb">
            <h1 className='hero-text'>
          Host your meeting with <br /> world-class amenities. <br />
          <span className="highlight">Starting at ₹199/-!</span>
     </h1>
        </div>
      {/* <img src={honeyComb} alt="Honeycomb Background" className="honeycomb-background" /> */}

      <div className="yellow-mask"></div>
      <div className='yellow-mask-large'></div>
      <div className="hero-content">
       
        <div className="image-container">
          <img src={officeGuy} alt="Office Guy" className="office-guy" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

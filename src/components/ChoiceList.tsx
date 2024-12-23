import './choicelist.style.css';
import community from '../assets/community.svg';
import gym from '../assets/gym.svg';
import wifi from '../assets/wifi.svg';
import cafe from '../assets/cafe.svg';
import affordable from '../assets/affordable.svg';
import lounges from '../assets/lounges.svg';
import booking from '../assets/booking.svg';
import sportsArea from '../assets/sports-area.svg';

type ChoiceProps = {
    iconName: string;
    text: string;
};

const Choice = ({ iconName, text }: ChoiceProps) => {
    return (
        <div className="choice-container">
            <img
                src={`src/assets/${iconName}`}
                alt={text}
                className="choice-icon"
            />
            <span className="choice-text">{text}</span>
        </div>
    );
};

const Choices = [
    { iconName: community, text: 'Community Events' },
    { iconName: gym, text: 'Gym Facilities' },
    { iconName: wifi, text: 'High-Speed WiFi' },
    { iconName: cafe, text: 'Cafe & Tea Bar' },
    { iconName: affordable, text: 'Affordable' },
    { iconName: lounges, text: 'Comfort Lounges' },
    { iconName: booking, text: 'Quick Booking' },
    { iconName: sportsArea, text: 'Sports Area' },
];

const ChoiceList = () => {
    return (
        <div className="choice-section">
            <h2 className="choice-heading">Why Choose us?</h2>
            <div className="choice-list">
                {Choices.map((choice, index) => (
                    <Choice key={index} {...choice} />
                ))}
            </div>
        </div>
    );
};

export default ChoiceList;

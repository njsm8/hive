import './choicelist.style.css';

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
    { iconName: 'community.svg', text: 'Community Events' },
    { iconName: 'gym.svg', text: 'Gym Facilities' },
    { iconName: 'wifi.svg', text: 'High-Speed WiFi' },
    { iconName: 'cafe.svg', text: 'Cafe & Tea Bar' },
    { iconName: 'affordable.svg', text: 'Affordable' },
    { iconName: 'lounges.svg', text: 'Comfort Lounges' },
    { iconName: 'booking.svg', text: 'Quick Booking' },
    { iconName: 'sports-area.svg', text: 'Sports Area' },
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

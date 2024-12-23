import './booking.style.css';
const Tag = ({ tag }: { tag: string }) => {
    return (
        <div className="tag-container">
            <img src="src/assets/honeycomb.svg" alt="Tag" className="tag-icon" />
            <span className="tag-text">{tag}</span>
        </div>
    );
}

export default Tag;
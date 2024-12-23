import Tag from "./Tag";

const BookingCard = () => {
    return (
        <div className="booking-card">
            <h2>Book your next adventure</h2>
            <p>Choose from our selection of the world's best adventure tours.</p>
            <button className="btn">Book now!</button>
            <Tag tag="Adventure" />
        </div>
    );
}

export default BookingCard;
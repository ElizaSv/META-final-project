import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-description">
          <p className="title">Little Lemon</p>
          <p className="subtitle">Chicago</p>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="reserve-btn btn">Reserve a table</button>
          </Link>
        </div>
        <div className="image-wrapper">
          <img
            className="hero-image"
            src="../images/image5.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

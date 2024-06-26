import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  console.log(dispatch);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: "",
    time: "00:00",
    noOfGuests: 1,
    occasion: "Birthday",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));
  return (
    <main className="booking">
      <h1 className="desc-text form-desc">
        Please fill our booking form to place your order!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contact-number">Contact Number:</label>
          <input
            type="text"
            id="contact-number"
            name="contactNumber"
            placeholder="123-456-7890"
            value={formData.contactNumber}
            onChange={handleFormChange}
          />
        </div>
        <div className="input-group date-time">
          <div>
            <label htmlFor="res-date">Choose date:</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              required
              min={currentDate}
            />
          </div>
          <div>
            <label htmlFor="res-time">Choose time:</label>
            <select
              id="res-time "
              name="time"
              value={formData.time}
              onChange={handleFormChange}
              required
            >
              {options}
            </select>
          </div>
        </div>
        <div className="input-group guests-occasion">
          <div>
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              required
              id="guests"
              name="noOfGuests"
              value={formData.noOfGuests}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              required
              value={formData.occasion}
              onChange={handleFormChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
        </div>
        <button className="submit" type="submit" aria-label="Submit Button">
          Submit
        </button>
      </form>
    </main>
  );
}

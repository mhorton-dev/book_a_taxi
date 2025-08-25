import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Booking() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: 1,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const now = new Date();

    if (!formData.pickup.trim())
      newErrors.pickup = "Pickup location is required.";
    if (!formData.drop.trim())
      newErrors.drop = "Drop-off location is required.";

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }
    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    // If both date and time are entered, check if it's in the past
    if (formData.date && formData.time) {
      const selected = new Date(`${formData.date}T${formData.time}`);
      if (selected < now) {
        newErrors.time = "Selected date & time cannot be in the past.";
      }
    }

    if (formData.passengers < 1)
      newErrors.passengers = "At least 1 passenger required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      console.log("Booking confirmed:", formData);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="max-w-content card">
      <h2 className="text-center text-2xl font-bold mb-4">Book a Taxi</h2>

      {submitted ? (
        <p className="text-green-600 font-semibold">
          ✅ Booking confirmed! Pickup at {formData.pickup} on {formData.date}{" "}
          at {formData.time}.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pickup */}
          <div>
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
            />
            {errors.pickup && <p className="text-red-500">{errors.pickup}</p>}
          </div>

          {/* Drop */}
          <div>
            <label>Drop-off Location</label>
            <input
              type="text"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
            />
            {errors.drop && <p className="text-red-500">{errors.drop}</p>}
          </div>

          {/* Date */}
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>

          {/* Time */}
          <div>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p className="text-red-500">{errors.time}</p>}
          </div>

          {/* Passengers */}
          <div>
            <label>Passengers</label>
            <input
              type="number"
              name="passengers"
              min="1"
              value={formData.passengers}
              onChange={handleChange}
            />
            {errors.passengers && (
              <p className="text-red-500">{errors.passengers}</p>
            )}
          </div>

          {/* Submit */}
          <button type="submit">Confirm Booking</button>
        </form>
      )}
    </div>
  );
}

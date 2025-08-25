import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Booking() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
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
    const today = new Date().toISOString().split("T")[0];

    if (!formData.pickup.trim())
      newErrors.pickup = "Pickup location is required.";
    if (!formData.drop.trim())
      newErrors.drop = "Drop-off location is required.";
    if (!formData.date) {
      newErrors.date = "Date & time is required.";
    } else if (formData.date < today) {
      newErrors.date = "Date cannot be in the past.";
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
          ✅ Booking confirmed! We’ll pick you up at {formData.pickup}.
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
            <label>Date & Time</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
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

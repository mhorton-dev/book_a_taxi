import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Booking() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Book Your Ride</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <InputField
            placeholder="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />
          <InputField
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <Button type="submit" label="Confirm Booking" />
        </form>
      ) : (
        <div className="p-6 bg-green-100 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">✅ Booking Confirmed!</h3>
          <p>
            <strong>Pickup:</strong> {pickup}
          </p>
          <p>
            <strong>Drop:</strong> {drop}
          </p>
          <p>
            <strong>Time:</strong> {new Date(time).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}

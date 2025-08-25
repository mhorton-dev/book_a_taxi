import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      console.log("Contact form submitted:", formData);
      // Here you can send data to a backend or API
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="p-6 max-w-content mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      {submitted ? (
        <div className="text-center p-6 bg-green-100 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">✅ Message Sent!</h3>
          <p>Thank you, {formData.name}. We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label>Name</label>
            <InputField
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <Button type="submit" label="Send Message" />
        </form>
      )}
    </div>
  );
}

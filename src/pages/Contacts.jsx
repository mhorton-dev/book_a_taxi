import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Contacts() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <form className="mt-6 space-y-4">
        <InputField
          type="text"
          placeholder="Your Name"
          value=""
          onChange={() => {}}
        />
        <InputField
          type="email"
          placeholder="Your Email"
          value=""
          onChange={() => {}}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 border rounded-xl"
        ></textarea>
        <Button type="submit" label="Send Message" />
      </form>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Booking from "./pages/Booking";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Book A Taxi</h1>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contacts" className="hover:underline">
          Contacts
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/booking" className="hover:underline">
          Booking
        </Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

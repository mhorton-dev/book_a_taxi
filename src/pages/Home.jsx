import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-yellow-400 text-black py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Ride with Comfort & Speed</h1>
        <p className="text-lg mb-6">
          Book A Taxi makes your city travel simple, safe, and affordable.
        </p>
        <Link
          to="/booking"
          className="cta-button inline-block px-8 py-3 bg-black text-yellow-400 font-semibold rounded-xl hover:bg-gray-900 transition"
        >
          Book Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-6 bg-gray-100 text-center max-w-content mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why Choose Book A Taxi?</h2>
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p>
              Our taxis are available around the clock for any emergency or
              regular rides.
            </p>
          </div>
          <div className="feature-card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Fares</h3>
            <p>
              Competitive pricing with transparent fare estimates. No surprises!
            </p>
          </div>
          <div className="feature-card p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
            <p>
              Experienced and friendly drivers ensure a safe and pleasant ride.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to ride?</h2>
        <p className="mb-6">Get your taxi in just a few clicks!</p>
        <Link
          to="/booking"
          className="cta-button inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition"
        >
          Book Your Ride
        </Link>
      </section>
    </div>
  );
}

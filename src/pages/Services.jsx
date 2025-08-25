export default function Services() {
  const services = [
    {
      title: "City Rides",
      description: "Quick and affordable rides within the city.",
    },
    {
      title: "Airport Transfers",
      description: "Comfortable rides to and from the airport.",
    },
    {
      title: "Outstation Trips",
      description: "Reliable rides for long-distance journeys.",
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li
            key={index}
            className="p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

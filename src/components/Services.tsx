import React from 'react';
import { Clock, Music, Book, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Sunday Service",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for worship, prayer, and inspiring messages"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Worship Night",
      time: "Wednesday 7:00 PM",
      description: "Experience powerful worship and prayer"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Bible Study",
      time: "Tuesday 6:30 PM",
      description: "Deep dive into God's word with our community"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Youth Group",
      time: "Friday 6:00 PM",
      description: "Fun and fellowship for young believers"
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Weekly Services</h2>
          <p className="mt-4 text-xl text-gray-600">Join us in worship and fellowship</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-indigo-600 font-medium mb-2">{service.time}</p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
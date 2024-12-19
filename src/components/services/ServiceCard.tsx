import React from 'react';
import { Clock, Music, Book, Users } from 'lucide-react';
import { ServiceType } from '../../utils/types';

const icons = {
  "Sunday Service": Clock,
  "Worship Night": Music,
  "Bible Study": Book,
  "Youth Group": Users
};

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = icons[service.title as keyof typeof icons];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="text-indigo-600 mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-indigo-600 font-medium mb-2">{service.time}</p>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
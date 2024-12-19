import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  lines: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, lines }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <Icon className="h-8 w-8 text-indigo-600 mx-auto" />
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      {lines.map((line, index) => (
        <p key={index} className="mt-2 text-gray-600">{line}</p>
      ))}
    </div>
  );
};

export default ContactCard;
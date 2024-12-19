import React from 'react';
import { SectionHeaderProps } from '../../utils/types';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
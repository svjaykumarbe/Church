import React from 'react';
import { Heart, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Our Church</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Building a community of faith, hope, and love
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To spread God's love and make disciples through worship, fellowship, and service
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Our Community</h3>
              <p className="mt-2 text-gray-600">
                A welcoming family of believers united in faith and purpose
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be a beacon of hope and transformation in our community and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
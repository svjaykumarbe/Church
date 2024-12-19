import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our church community</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <MapPin className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">123 Faith Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Phone className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">(555) 123-4567</p>
            <p className="text-gray-600">Mon-Fri 9:00 AM - 5:00 PM</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Mail className="h-8 w-8 text-indigo-600 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">info@gracechurch.com</p>
            <p className="text-gray-600">We'll respond within 24 hours</p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
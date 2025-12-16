
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-brand-gray py-20 min-h-screen">
      <Container>
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl uppercase text-white">Services & Pricing</h1>
          <p className="text-lg text-gray-400 mt-2">The foundation of style, tailored for you.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-dark p-8 md:p-12 rounded-lg border border-gray-800 shadow-2xl shadow-black/30">
          <ul className="divide-y divide-gray-700">
            {SERVICES.map((service, index) => (
              <li key={index} className="py-6 flex flex-col sm:flex-row justify-between items-start">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl font-bold font-heading uppercase text-brand-gold">{service.name}</h3>
                  <p className="text-gray-400 mt-2 max-w-md">{service.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-3xl font-heading text-white">{service.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mt-16">
            <Link to="/contact" className="bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-amber-400 transition-colors duration-300 uppercase text-lg tracking-wider">
              Book Your Appointment
            </Link>
        </div>
      </Container>
    </div>
  );
};

export default Services;

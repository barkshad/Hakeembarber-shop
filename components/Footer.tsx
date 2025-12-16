
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray border-t border-gray-800">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-400">{BUSINESS_INFO.address}</p>
          </div>
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-gold transition-colors">{BUSINESS_INFO.phone}</a>
            </p>
            <p className="text-gray-400">
              Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-gold transition-colors">{BUSINESS_INFO.email}</a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

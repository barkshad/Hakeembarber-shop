
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { SERVICES } from '../constants';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
} as const;

const listVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Services: React.FC = () => {
  return (
    <motion.div 
      className="bg-brand-gray py-20 min-h-screen"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
    >
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-6xl uppercase text-white">Services & Pricing</h1>
          <p className="text-lg text-gray-400 mt-2">The foundation of style, tailored for you.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-brand-dark p-8 md:p-12 rounded-lg border border-gray-800 shadow-2xl shadow-black/30"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <ul className="divide-y divide-gray-700">
            {SERVICES.map((service, index) => (
              <motion.li key={index} className="py-6 flex flex-col sm:flex-row justify-between items-start" variants={itemVariants}>
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl font-bold font-heading uppercase text-brand-gold">{service.name}</h3>
                  <p className="text-gray-400 mt-2 max-w-md">{service.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-3xl font-heading text-white">{service.price}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="inline-block bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-amber-400 transition-colors duration-300 uppercase text-lg tracking-wider">
                Book Your Appointment
              </Link>
            </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Services;
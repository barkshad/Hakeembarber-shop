
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { BUSINESS_INFO } from '../constants';

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

const Contact: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <motion.div 
      className="bg-brand-dark py-20 min-h-screen"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
    >
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-6xl uppercase text-white">Get In Touch</h1>
          <p className="text-lg text-gray-400 mt-2">Book your appointment or drop us a line.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-brand-gray p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-3xl font-heading uppercase text-brand-gold mb-6">Contact Information</h2>
            
            <div className="space-y-4 text-lg">
              <p><strong className="w-24 inline-block">Address:</strong> {BUSINESS_INFO.address}</p>
              <p><strong className="w-24 inline-block">Phone:</strong> <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-gold">{BUSINESS_INFO.phone}</a></p>
              <p><strong className="w-24 inline-block">Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-gold">{BUSINESS_INFO.email}</a></p>
            </div>

            <h2 className="text-3xl font-heading uppercase text-brand-gold mt-10 mb-6">Business Hours</h2>
            <div className="space-y-2 text-lg">
              {Object.entries(BUSINESS_INFO.hours).map(([day, time]) => (
                <p key={day} className="flex justify-between"><span className="font-semibold">{day}</span> <span>{time}</span></p>
              ))}
            </div>

            <motion.div 
              className="mt-10"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
            >
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-500 text-white font-bold py-4 px-10 rounded-md hover:bg-green-600 transition-colors duration-300 uppercase text-lg tracking-wider">
                Book on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-brand-gray p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          >
            <h2 className="text-3xl font-heading uppercase text-brand-gold mb-6">Send a Message</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-brand-gold focus:border-brand-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows={5} required className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:ring-brand-gold focus:border-brand-gold"></textarea>
              </div>
              <div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-md hover:bg-amber-400 transition-colors duration-300 uppercase text-lg tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 rounded-lg overflow-hidden border-4 border-brand-gray"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <iframe
            src={BUSINESS_INFO.mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hakeem Barber Studio Location on Google Maps"
          ></iframe>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Contact;
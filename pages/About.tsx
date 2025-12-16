
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';

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

const About: React.FC = () => {
  return (
    <motion.div 
      className="bg-brand-gray py-20 min-h-screen"
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-6xl uppercase text-white">The Studio Story</h1>
            <p className="text-lg text-gray-400 mt-2">More than a haircut, it's a legacy.</p>
            <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <img src="https://picsum.photos/seed/about/600/700" alt="Hakeem, the founder" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent"></div>
            </motion.div>
            <motion.div 
              className="space-y-6 text-lg text-gray-300"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p>
                Founded in 2020 by Hakeem, our studio was born from a passion for the timeless art of barbering mixed with a modern aesthetic. Hakeem saw a need for a space where men could not only get a world-class haircut but also relax, network, and feel part of a community.
              </p>
              <p>
                We believe a haircut is more than just a service; it's a craft, an experience, and a boost of confidence. Our philosophy is built on three pillars: <strong className="text-brand-gold">Craftsmanship, Community, and Confidence.</strong>
              </p>
              <p>
                Every barber at our studio is hand-picked for their skill, attention to detail, and commitment to customer satisfaction. We invest in continuous training and use only the highest quality products to ensure you look and feel your best every time you leave our chair.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
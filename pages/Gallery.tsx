
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { GALLERY_IMAGES } from '../constants';

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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Gallery: React.FC = () => {
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
          <h1 className="font-heading text-6xl uppercase text-white">Our Work</h1>
          <p className="text-lg text-gray-400 mt-2">A showcase of our passion and precision.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div 
              key={image.id} 
              className={`group relative overflow-hidden rounded-lg ${index % 3 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-bold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Gallery;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { SERVICES, TESTIMONIALS, BUSINESS_INFO } from '../constants';

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

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => (
  <div className="relative h-[80vh] min-h-[500px] bg-black flex items-center justify-center text-center text-white">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
      style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
    <motion.div 
      className="relative z-10 p-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase tracking-wider text-shadow-lg"
        variants={itemVariants}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        Precision Cuts. Clean Style.
      </motion.h1>
      <motion.p 
        className="text-2xl md:text-4xl lg:text-5xl font-heading uppercase text-brand-gold tracking-wider mt-2 mb-8"
        variants={itemVariants}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        Real Confidence.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        variants={itemVariants}
      >
        <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px #D4AF37' }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto block bg-brand-gold text-brand-dark font-bold py-4 px-10 rounded-md transition-colors duration-300 uppercase text-lg tracking-wider">
            Book Appointment
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto block bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-4 px-10 rounded-md hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 uppercase text-lg tracking-wider">
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
);

const ServicesPreview = () => (
    <motion.section 
      className="py-20 bg-brand-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
        <Container>
            <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="font-heading text-5xl uppercase text-white">Our Services</h2>
                <p className="text-lg text-gray-400 mt-2">Crafted with precision, delivered with style.</p>
                <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.slice(0, 3).map((service) => (
                    <motion.div 
                      key={service.name} 
                      className="bg-brand-dark p-8 rounded-lg border border-gray-800 text-center"
                      variants={itemVariants}
                      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
                    >
                        <h3 className="text-2xl font-bold font-heading uppercase text-brand-gold">{service.name}</h3>
                        <p className="text-gray-400 mt-4 mb-6 h-20">{service.description}</p>
                        <span className="text-3xl font-heading text-white">{service.price}</span>
                    </motion.div>
                ))}
            </div>
            <motion.div className="text-center mt-12" variants={itemVariants}>
                <Link to="/services" className="text-brand-gold font-bold uppercase tracking-wider hover:text-amber-400 transition-colors">
                    View All Services &rarr;
                </Link>
            </motion.div>
        </Container>
    </motion.section>
);

const WhyChooseUs = () => (
    <motion.section 
      className="py-20 bg-brand-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
        <Container>
            <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="font-heading text-5xl uppercase text-white">Why Choose Us</h2>
                <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="font-heading text-3xl text-brand-gold mb-2">Expert Barbers</h3>
                    <p className="text-gray-400">Our team consists of highly skilled, passionate barbers dedicated to the craft of men's grooming.</p>
                </motion.div>
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="font-heading text-3xl text-brand-gold mb-2">Impeccable Hygiene</h3>
                    <p className="text-gray-400">We uphold the highest standards of cleanliness and sanitation, ensuring a safe and comfortable experience for every client.</p>
                </motion.div>
                <motion.div className="text-center" variants={itemVariants}>
                    <h3 className="font-heading text-3xl text-brand-gold mb-2">Premium Experience</h3>
                    <p className="text-gray-400">From the moment you walk in, enjoy a welcoming atmosphere, top-tier products, and unparalleled customer service.</p>
                </motion.div>
            </div>
        </Container>
    </motion.section>
);

const TestimonialsSection = () => (
    <motion.section 
      className="py-20 bg-brand-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
        <Container>
            <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="font-heading text-5xl uppercase text-white">What Our Clients Say</h2>
                <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial) => (
                    <motion.div key={testimonial.name} className="bg-brand-dark p-8 rounded-lg border border-gray-800" variants={itemVariants}>
                        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                        <p className="text-right text-brand-gold font-bold mt-4">- {testimonial.name}</p>
                    </motion.div>
                ))}
            </div>
        </Container>
    </motion.section>
);

const Home: React.FC = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
    </motion.div>
  );
};

export default Home;
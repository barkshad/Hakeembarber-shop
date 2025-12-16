
import React from 'react';
import Container from '../components/Container';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="bg-brand-dark py-20 min-h-screen">
      <Container>
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl uppercase text-white">Our Work</h1>
          <p className="text-lg text-gray-400 mt-2">A showcase of our passion and precision.</p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={image.id} className={`group relative overflow-hidden rounded-lg ${index % 3 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-bold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;

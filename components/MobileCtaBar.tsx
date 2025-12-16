
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758c.47.886.954 1.733 1.49 2.544l.215.322c.81.12 1.63.12 2.44 0l.215-.322c.536-.81.97-1.658 1.49-2.544l-1.518-.758a1 1 0 01-.54-1.06l.74-4.435A1 1 0 0111.847 2H14a1 1 0 011 1v1.947a1 1 0 01-.316.732l-1.58 1.581c-1.353 1.353-.94 3.79.816 5.546l.04.038c.84.673 1.83.993 2.858.993a5.02 5.02 0 002.858-.993l.04-.038c1.756-1.756 2.17-4.193.816-5.546L16.316 8.68A1 1 0 0116 7.947V6a1 1 0 011-1h.053a1 1 0 011 1v.053a1 1 0 01-.004.148l-.01.144c-.21 1.226-.704 2.378-1.428 3.393l-.018.025c-.78.96-1.767 1.7-2.88 2.14l-.078.03c-1.14.42-2.35.6-3.58.5-1.23-.1-2.42-.4-3.51-1.02l-.09-.05c-1.11-.64-2.1-1.48-2.9-2.5l-.01-.01c-.8-1.02-1.4-2.23-1.7-3.51l-.03-.13A1 1 0 012 3z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.002-6.554 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.554-5.338 11.891-11.893 11.891-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.885-.002 2.02.634 3.898 1.67 5.495l-.272.962 1.01.244zm6.273-8.007c-.131-.266-1.123-1.039-1.297-1.039-.174 0-.322.04-.469.314-.147.274-.637 1.657-.771 1.845-.133.188-.266.223-.497.066-.231-.159-1.258-.874-2.001-1.391-.564-.423-1.002-1.088-1.127-1.313-.124-.224-.039-.348.066-.469.091-.108.223-.266.334-.378.112-.111.147-.188.223-.314.075-.125.039-.266-.026-.378-.064-.112-.469-1.123-.637-1.523-.169-.4-.338-.348-.469-.348s-.266-.038-.378-.038c-.112 0-.266.04-.378.223-.112.188-.469.564-.469 1.391s.469 1.611.536 1.737c.067.125 1.123 1.804 2.808 2.45.38.145.711.231 1.053.298.542.108 1.123.016 1.246-.112.131-.133.423-.962.491-1.123.066-.16.112-.266.075-.378z" />
    </svg>
);


const MobileCtaBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-gray/90 backdrop-blur-sm z-50 p-2 border-t border-gray-700 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <div className="flex justify-around items-center space-x-2">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`} 
          className="flex-1 flex items-center justify-center bg-gray-600 text-white font-bold py-3 px-4 rounded-md hover:bg-gray-500 transition-colors duration-300 text-sm uppercase tracking-wider"
        >
          <PhoneIcon />
          Call Now
        </a>
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileCtaBar;

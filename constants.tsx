
import type { Service, Testimonial, GalleryImage } from './types';

export const BUSINESS_INFO = {
  name: "Hakeem Barber Studio",
  phone: "+11234567890",
  whatsapp: "+11234567890",
  email: "contact@hakeemstudio.com",
  address: "Kilifi, near St. Thomas Girls Secondary School, Kenya",
  hours: {
    "Monday - Friday": "9:00 AM - 7:00 PM",
    "Saturday": "10:00 AM - 6:00 PM",
    "Sunday": "Closed"
  },
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.83574447814!2d39.85290867591041!3d-3.633116942978052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f3eeb24803733%3A0x6a65527f4f6e3002!2sSt.%20Thomas%20Girls'%20Secondary%20School!5e0!3m2!1sen!2ske!4v1717144455806!5m2!1sen!2ske"
};

export const SERVICES: Service[] = [
  { name: "Precision Haircut", description: "A classic cut and style, tailored to your preference. Includes a shampoo and condition.", price: "$45" },
  { name: "Signature Fade", description: "Expertly blended fade of any style (low, mid, high, skin fade). Finished with a sharp razor line-up.", price: "$50" },
  { name: "Beard Trim & Sculpt", description: "Shape, trim, and line up your beard to perfection. Includes hot towel and premium beard oil.", price: "$30" },
  { name: "Classic Hot Towel Shave", description: "The ultimate relaxing experience. A traditional straight-razor shave with hot towels and rich lather.", price: "$40" },
  { name: "The Complete Experience", description: "A combination of our Precision Haircut and Beard Trim & Sculpt services.", price: "$70" },
  { name: "Head Shave", description: "A clean and smooth straight-razor head shave with hot towels and post-shave treatment.", price: "$45" },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Hakeem is a true artist. Best fade I've ever had, hands down. The studio is clean, modern, and the vibe is perfect. I won't go anywhere else.", name: "Jamal K." },
  { quote: "Finally, a barber who listens! I got the exact cut I wanted. The hot towel shave was incredibly relaxing. 10/10 experience.", name: "David L." },
  { quote: "The attention to detail here is unmatched. Professional, friendly, and incredibly skilled. Worth every penny for a premium grooming experience.", name: "Michael P." },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "https://picsum.photos/seed/barber1/600/800", alt: "Client with a fresh skin fade" },
  { id: 2, src: "https://picsum.photos/seed/barber2/800/600", alt: "Barber meticulously trimming a client's beard" },
  { id: 3, src: "https://picsum.photos/seed/barber3/600/800", alt: "Stylish haircut with a sharp lineup" },
  { id: 4, src: "https://picsum.photos/seed/barber4/600/800", alt: "Close-up of a perfectly executed hair fade" },
  { id: 5, src: "https://picsum.photos/seed/barber5/800/600", alt: "Interior of the modern Hakeem Barber Studio" },
  { id: 6, src: "https://picsum.photos/seed/barber6/600/800", alt: "Client smiling after a complete hair and beard service" },
  { id: 7, src: "https://picsum.photos/seed/barber7/800/600", alt: "A variety of premium grooming products on a shelf" },
  { id: 8, src: "https://picsum.photos/seed/barber8/600/800", alt: "Detailed beard sculpting in progress" },
];

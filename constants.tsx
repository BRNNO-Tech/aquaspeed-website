
import { PackageType, DetailPackage, GalleryItem } from './types';

export const BOOKING_URL = 'https://www.app.brnno.io/aqua-speed-detailing';
export const INSTAGRAM_URL = 'https://www.instagram.com/detailing_aquaspeed/';
export const TIKTOK_URL = 'https://www.tiktok.com/@aquaspeed23';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  photo: string;
  rating: number;
}

export const PACKAGES: DetailPackage[] = [
  {
    id: 'ext-pro',
    name: 'Full Exterior Detail',
    type: PackageType.EXTERIOR,
    price: '$79',
    description: 'A thorough deep clean for your vehicle\'s exterior surfaces.',
    image: 'https://picsum.photos/800/600?random=1',
    features: [
      'Foam Cannon Pre-Wash',
      'Hand Wash & Dry',
      'Wheel & Tire Deep Clean',
      'Tire Dressing',
      'Glass Streak-Free Shine',
      'Spray Sealant Protection'
    ]
  },
  {
    id: 'int-pro',
    name: 'Full Interior Detail',
    type: PackageType.INTERIOR,
    price: '$129',
    description: 'Transform your cabin into a showroom-fresh environment.',
    image: 'https://picsum.photos/800/600?random=2',
    features: [
      'Deep Vacuuming',
      'Steam Cleaning',
      'Upholstery Shampoo',
      'Leather Conditioning',
      'Dashboard & Console UV Protection',
      'Odor Neutralizer'
    ]
  },
  {
    id: 'full-showroom',
    name: 'Full Detail',
    type: PackageType.FULL,
    price: '$199',
    description: 'The ultimate restoration for both inside and out.',
    image: 'https://picsum.photos/800/600?random=3',
    features: [
      'Everything in Exterior & Interior',
      'Engine Bay Cleaning',
      'Clay Bar Treatment',
      'Carnauba Wax Finish',
      'Door Jam Cleaning',
      'Interior Detail Brushing'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: '1',
    image: 'public/images/gallery/c8_z06.jpg',
    caption: 'Exterior detail'
  },
  {
    id: '2',
    image: 'public/images/gallery/detailing_van.jpg',
    caption: 'Mobile setup ready to go'
  },
  {
    id: '3',
    image: 'public/images/gallery/engine_bay.jpg',
    caption: 'Engine bay detail'
  },
  {
    id: '4',
    image: 'public/images/gallery/ford_fusion.PNG',
    caption: 'Paint care'
  },
  {
    id: '5',
    image: 'public/images/gallery/picture.PNG',
    caption: 'Wheel and tire cleaning'
  },
  {
    id: '6',
    image: 'public/images/gallery/seats.jpg',
    caption: 'Interior before and after'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Tesla Model S Owner',
    content: 'AquaSpeed is a lifesaver. They detailed my car while I was in meetings, and I walked out to a car that looked better than the day I bought it. Absolutely impeccable service.',
    photo: 'https://i.pravatar.cc/150?u=sarah',
    rating: 5
  },
  {
    id: 't2',
    name: 'David Chen',
    role: 'Porsche Enthusiast',
    content: 'The attention to detail on the paint correction was amazing. They removed swirls I thought were permanent. Highly recommend for high-end vehicles.',
    photo: 'https://i.pravatar.cc/150?u=david',
    rating: 5
  },
  {
    id: 't3',
    name: 'Michael Ross',
    role: 'Family SUV Owner',
    content: 'With three kids and a dog, my interior was a disaster. AquaSpeed spent 4 hours on it and managed to get every single stain out. It smells amazing!',
    photo: 'https://i.pravatar.cc/150?u=michael',
    rating: 5
  }
];

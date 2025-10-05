import { Product } from '@/contexts/CartContext';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import cameraLensImg from '@/assets/camera-lens.jpg';
import officeChairImg from '@/assets/office-chair.jpg';
import gamingMouseImg from '@/assets/gaming-mouse.jpg';
import coffeeMakerImg from '@/assets/coffee-maker.jpg';
import bluetoothSpeakerImg from '@/assets/bluetooth-speaker.jpg';
import laptopStandImg from '@/assets/laptop-stand.jpg';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    imageUrl: headphonesImg,
    stock: 15,
    category: 'electronics'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Your perfect workout companion.',
    price: 199.99,
    imageUrl: smartwatchImg,
    stock: 8,
    category: 'wearables'
  },
  {
    id: '3',
    name: 'Professional Camera Lens',
    description: 'High-performance 85mm lens for portrait photography. Sharp, fast, and perfect for professional photographers.',
    price: 1299.99,
    imageUrl: cameraLensImg,
    stock: 3,
    category: 'photography'
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.',
    price: 449.99,
    imageUrl: officeChairImg,
    stock: 12,
    category: 'furniture'
  },
  {
    id: '5',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with RGB lighting and programmable buttons. Built for competitive gaming.',
    price: 89.99,
    imageUrl: gamingMouseImg,
    stock: 25,
    category: 'gaming'
  },
  {
    id: '6',
    name: 'Premium Coffee Maker',
    description: 'Professional-grade coffee maker with temperature control and multiple brewing options. Perfect coffee every time.',
    price: 349.99,
    imageUrl: coffeeMakerImg,
    stock: 7,
    category: 'kitchen'
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.',
    price: 129.99,
    imageUrl: bluetoothSpeakerImg,
    stock: 18,
    category: 'audio'
  },
  {
    id: '8',
    name: 'Laptop Stand',
    description: 'Adjustable aluminum laptop stand with cooling design. Improve your posture and productivity.',
    price: 59.99,
    imageUrl: laptopStandImg,
    stock: 30,
    category: 'accessories'
  }
];
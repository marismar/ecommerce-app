export interface Product {
  createdAt: string;
  sellerName: string;
  image: string;
  name: string;
  price: string;
  originalPrice: string;
  favorite: boolean;
  id: string;
}

export const products: Product[] = [
  {
    createdAt: '2025-04-27T16:29:36.133Z',
    sellerName: 'Miguel Wiza DDS',
    image:
      'https://resource.logitech.com/content/dam/logitech/en/products/webcams/c310/gallery/c310-gallery-1.png',
    name: 'Logi Webcam 4K Ultra HD ',
    price: '554.75',
    originalPrice: '503.90',
    favorite: false,
    id: '1',
  },
  {
    createdAt: '2025-04-27T17:52:55.374Z',
    sellerName: 'Michael Flatley',
    image: 'https://i.postimg.cc/GpTpTdzg/fone.png',
    name: 'Headphones Bluetooth 5.0',
    price: '744.35',
    originalPrice: '162.09',
    favorite: false,
    id: '2',
  },

  {
    createdAt: '2025-04-27T11:02:10.022Z',
    sellerName: 'Adrienne Donnelly',
    image: 'https://i.postimg.cc/J0507xK1/iphone-rosa.png',
    name: 'Apple iPhone 16C',
    price: '965.55',
    originalPrice: '64.99',
    favorite: false,
    id: '4',
  },
  {
    createdAt: '2025-04-28T02:26:03.604Z',
    sellerName: 'Alexandra Schulist',
    image: 'https://i.postimg.cc/RZs3nPmh/macbook-air.png',
    name: 'Macbook Air 13.3"',
    price: '865.99',
    originalPrice: '992.75',
    favorite: true,
    id: '5',
  },
  {
    createdAt: '2025-04-27T20:41:00.990Z',
    sellerName: 'Cecelia Cartwright',
    image: 'https://i.postimg.cc/T3w1Grb6/iphone.png',
    name: 'Apple iPhone 14 Pro Max',
    price: '202.79',
    originalPrice: '454.90',
    favorite: false,
    id: '3',
  },

  {
    createdAt: '2025-04-27T22:56:22.083Z',
    sellerName: 'Amelia Donnelly',
    image: 'https://i.postimg.cc/Gm52pHPs/controle.png',
    name: 'DualShock 4 Controller',
    price: '564.40',
    originalPrice: '51.19',
    favorite: false,
    id: '6',
  },
];

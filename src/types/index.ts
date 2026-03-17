export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'veg' | 'non-veg' | 'fast-food' | 'combos';
  image: string;
  rating: number;
  reviews: number;
  isSpicy?: boolean;
  isBestseller?: boolean;
  prepTime: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
}

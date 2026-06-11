export interface Service {
  id: string;
  title: string;
  category: 'repair' | 'inspections' | 'accessories' | 'all';
  description: string;
  iconName: string;
  features: string[];
  estimatedTime?: string;
  startingPrice?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  avatarBlur: string;
}

export interface ProjectSample {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  selectedServices: string[];
  selectedProducts: string[];
  additionalDetails: string;
  preferredDate?: string;
  needsTowing: boolean;
}

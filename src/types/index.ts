export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  badge: string;
  features: string[];
  popular: boolean;
  color: string;
  iconColor: string;
}

export interface Testimonial {
  name: string;
  age: string;
  rating: number;
  comment: string;
  image: string;
  transformation: string;
}

export interface ScheduleItem {
  day: string;
  hours: string;
  general: string;
}

export interface ScheduleData {
  women: ScheduleItem[];
  men: ScheduleItem[];
}

export interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  info: string;
  subInfo: string;
  color: string;
  link?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
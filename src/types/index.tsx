export interface Product {
  id: string;
  name: string;
  image?: string; // 👈 make it optional
  description: string;
}


export interface NavItem {
  name: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
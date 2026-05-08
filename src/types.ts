export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  mercadoLivreUrl: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  nuvemshopUrl: string;
  mercadoLivreUrl: string;
  instagramUrl: string;
  whatsappNumber: string;
  whatsappMessage: string;
  description: string;
}

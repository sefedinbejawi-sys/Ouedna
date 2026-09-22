export interface ServiceCard {
  id: string;
  subdomain: string;
  name: string;
  badge: string;
  description: string;
  theme: 'gold' | 'emerald' | 'amber';
  icon: string;
  highlights: string[];
  metrics: string;
  ctaText: string;
  link: string;
  gradientBg: string;
  borderColor: string;
  glowClass: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  subdomain: string;
  location: string;
  date: string;
  badge?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  subtitle: string;
  category: string;
}

export interface Municipality {
  name: string;
  code: string;
}

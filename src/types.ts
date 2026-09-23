/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceCard {
  id: string;
  subdomain: string;
  name: string;
  badge: string;
  description: string;
  theme: 'gold' | 'desert';
  icon: string;
  highlights: string[];
  status: 'active' | 'upcoming';
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
  badge?: string;
  url: string;
}

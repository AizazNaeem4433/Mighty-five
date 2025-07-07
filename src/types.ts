export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  iconUrl?: string;
  overview?: any[]; // Sanity block content
  process?: any[];
  benefits?: string[];
}
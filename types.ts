export type Language = 'es' | 'en' | 'pt';

export interface LocalizedString {
  es: string;
  en: string;
  pt: string;
}

export interface MenuItem {
  name: LocalizedString;
  description?: LocalizedString;
  price: number;
}

export interface MenuSubSection {
  title?: LocalizedString;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  title: LocalizedString;
  coverTitle: LocalizedString; // The fancy script title on the cover page
  coverImage: string; // URL for the section background
  subSections: MenuSubSection[];
}

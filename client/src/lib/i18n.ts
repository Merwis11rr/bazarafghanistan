export interface Translation {
  // Header
  siteTitle: string;
  searchPlaceholder: string;
  newAd: string;
  
  // Sidebar
  selectProvince: string;
  categories: string;
  
  // Main content
  onlineMarketTitle: string;
  itemsAvailable: string;
  activeAds: string;
  sortBy: string;
  newest: string;
  cheapest: string;
  mostExpensive: string;
  loadMore: string;
  
  // Item details
  today: string;
  category: string;
  
  // Footer
  aboutUs: string;
  aboutUsText: string;
  provinces: string;
  contact: string;
  
  // Common
  all: string;
}

export const translations: Record<string, Translation> = {
  fa: {
    // Header
    siteTitle: 'بازار افغانستان',
    searchPlaceholder: 'جستجو در بازار افغانستان...',
    newAd: 'آگهی جدید',
    
    // Sidebar
    selectProvince: 'انتخاب ولایت',
    categories: 'دسته‌بندی',
    
    // Main content
    onlineMarketTitle: 'بازار آنلاین افغانستان',
    itemsAvailable: 'کالا در دسترس',
    activeAds: 'آگهی فعال',
    sortBy: 'مرتب‌سازی:',
    newest: 'جدیدترین',
    cheapest: 'ارزان‌ترین',
    mostExpensive: 'گران‌ترین',
    loadMore: 'نمایش بیشتر',
    
    // Item details
    today: 'امروز',
    category: 'دسته:',
    
    // Footer
    aboutUs: 'درباره ما',
    aboutUsText: 'بازار آنلاین افغانستان، بزرگترین پلتفرم خرید و فروش در افغانستان',
    provinces: 'ولایات',
    contact: 'تماس با ما',
    
    // Common
    all: 'همه',
  },
  en: {
    // Header
    siteTitle: 'Afghanistan Marketplace',
    searchPlaceholder: 'Search Afghanistan Marketplace...',
    newAd: 'New Ad',
    
    // Sidebar
    selectProvince: 'Select Province',
    categories: 'Categories',
    
    // Main content
    onlineMarketTitle: 'Afghanistan Online Market',
    itemsAvailable: 'items available',
    activeAds: 'Active Ads',
    sortBy: 'Sort by:',
    newest: 'Newest',
    cheapest: 'Cheapest',
    mostExpensive: 'Most Expensive',
    loadMore: 'Load More',
    
    // Item details
    today: 'Today',
    category: 'Category:',
    
    // Footer
    aboutUs: 'About Us',
    aboutUsText: 'Afghanistan\'s largest online marketplace platform',
    provinces: 'Provinces',
    contact: 'Contact',
    
    // Common
    all: 'All',
  },
};

import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import ItemCard from '@/components/item-card';
import ItemStats from '@/components/item-stats';
import AdvancedSearch from '@/components/search-advanced';
import Footer from '@/components/footer';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import type { Item } from '@shared/schema';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProvince, setSelectedProvince] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [displayedItems, setDisplayedItems] = useState(48);
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');



  // Fetch all items
  const { data: items = [], isLoading } = useQuery<Item[]>({
    queryKey: ['/api/items'],
  });

  // Filter items with all criteria
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Province filter
      const matchesProvince = selectedProvince === 'all' || item.province === selectedProvince;
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      // Search query filter
      const matchesSearch = !searchQuery || 
        item.titleFa.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price range filter
      const matchesMinPrice = !minPrice || item.price >= parseInt(minPrice);
      const matchesMaxPrice = !maxPrice || item.price <= parseInt(maxPrice);
      
      return matchesProvince && matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice;
    });
  }, [items, selectedProvince, selectedCategory, searchQuery, minPrice, maxPrice]);

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest':
        return a.price - b.price;
      case 'mostExpensive':
        return b.price - a.price;
      case 'newest':
      default:
        return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    }
  });

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(48);
  }, [selectedProvince, selectedCategory, sortBy]);

  const itemsToShow = sortedItems.slice(0, displayedItems);
  const hasMoreItems = displayedItems < sortedItems.length;

  const loadMoreItems = () => {
    setDisplayedItems(prev => Math.min(prev + 24, sortedItems.length));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Skeleton */}
            <div className="lg:w-80 space-y-6">
              <Skeleton className="h-96" />
              <Skeleton className="h-64" />
            </div>
            
            {/* Main content skeleton */}
            <div className="flex-1">
              <Skeleton className="h-32 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Skeleton key={i} className="h-72" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg particles-bg flex flex-col">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 parallax flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar
            selectedProvince={selectedProvince}
            selectedCategory={selectedCategory}
            onProvinceChange={setSelectedProvince}
            onCategoryChange={setSelectedCategory}
          />

          {/* Main Content */}
          <main className="flex-1">
            {/* Advanced Search */}
            <AdvancedSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedProvince={selectedProvince}
              setSelectedProvince={setSelectedProvince}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />

            {/* Stats */}
            <ItemStats 
              totalItems={filteredItems.length}
              totalViews={Math.floor(Math.random() * 10000) + 5000}
              trending={Math.floor(Math.random() * 500) + 100}
              favorites={Math.floor(Math.random() * 1000) + 200}
            />

            {/* Stats Banner */}
            <Card className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white mb-6 shadow-xl overflow-hidden relative ultra-glass">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-teal-600/20 animate-shimmer"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-3 drop-shadow-lg text-gradient-animated animate-pulse-slow">
                      {t.onlineMarketTitle}
                    </h2>
                    <p className="opacity-95 text-lg animate-float">
                      {filteredItems.length.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US')} {t.itemsAvailable}
                    </p>
                  </div>
                  <div className="text-right rtl:text-right ltr:text-right">
                    <div className="text-4xl font-bold drop-shadow-lg neon-glow animate-pulse-slow">
                      {filteredItems.length.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US')}
                    </div>
                    <div className="text-base opacity-95 font-medium animate-float">
                      {t.activeAds}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <span className="font-medium text-foreground">
                  {t.sortBy}
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">{t.newest}</SelectItem>
                    <SelectItem value="cheapest">{t.cheapest}</SelectItem>
                    <SelectItem value="mostExpensive">{t.mostExpensive}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button variant="ghost" size="sm">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Items Grid */}
            {itemsToShow.length === 0 ? (
              <Card className="p-8 ultra-glass">
                <CardContent className="text-center">
                  <div className="text-6xl mb-4 animate-pulse-slow">🔍</div>
                  <p className="text-lg text-muted-foreground text-gradient-animated">
                    هیچ آگهی‌ای یافت نشد
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
                {itemsToShow.map((item, index) => (
                  <ItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
            
            {/* Load More Button */}
            {hasMoreItems && (
              <div className="text-center mt-8">
                <Button 
                  onClick={loadMoreItems}
                  className="btn-gradient text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 px-8 py-3"
                >
                  {t.loadMore}
                  <ChevronDown className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 gradient-card glass-effect border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.aboutUs}</h3>
              <p className="text-sm text-muted-foreground">
                {t.aboutUsText}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.categories}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">موبایل و تبلت</a></li>
                <li><a href="#" className="hover:text-primary">خودرو</a></li>
                <li><a href="#" className="hover:text-primary">املاک</a></li>
                <li><a href="#" className="hover:text-primary">لوازم خانه</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.provinces}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">کابل</a></li>
                <li><a href="#" className="hover:text-primary">هرات</a></li>
                <li><a href="#" className="hover:text-primary">قندهار</a></li>
                <li><a href="#" className="hover:text-primary">بلخ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">{t.contact}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 info@afghanmarketplace.com</p>
                <p>📞 +93 (0) 20 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

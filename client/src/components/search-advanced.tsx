import { useState } from 'react';
import { Search, Filter, X, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { AFGHANISTAN_PROVINCES, CATEGORIES } from '@/lib/constants';

interface AdvancedSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedProvince: string;
  setSelectedProvince: (province: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minPrice: string;
  setMinPrice: (price: string) => void;
  maxPrice: string;
  setMaxPrice: (price: string) => void;
}

export default function AdvancedSearch({
  searchQuery,
  setSearchQuery,
  selectedProvince,
  setSelectedProvince,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: AdvancedSearchProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [showAdvanced, setShowAdvanced] = useState(false);
  const provinces = AFGHANISTAN_PROVINCES[language];
  const categories = CATEGORIES[language];

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedProvince('all');
    setSelectedCategory('all');
    setMinPrice('');
    setMaxPrice('');
  };

  const activeFiltersCount = [
    searchQuery,
    selectedProvince !== 'all' ? selectedProvince : '',
    selectedCategory !== 'all' ? selectedCategory : '',
    minPrice,
    maxPrice,
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-primary transition-colors animate-float" />
        <Input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 rtl:pl-4 rtl:pr-12 py-4 text-lg ultra-glass border-2 border-primary/20 hover:border-primary/40 focus:border-primary/60 focus:scale-105 transition-all duration-300 rounded-xl shadow-2xl hover:shadow-emerald-500/20 focus:shadow-emerald-500/30"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1 rtl:ml-0 rtl:mr-1">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <Card className="ultra-glass animate-float">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gradient-animated">
                {language === 'fa' ? 'جستجوی پیشرفته' : 'Advanced Search'}
              </h3>
              {activeFiltersCount > 0 && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {language === 'fa' ? 'پاک کردن همه' : 'Clear All'}
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Province Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t.selectProvince}
                </label>
                <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                  <SelectTrigger className="ultra-glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((province, index) => {
                      const provinceKey = index === 0 ? 'all' : AFGHANISTAN_PROVINCES.fa[index];
                      return (
                        <SelectItem key={province} value={provinceKey}>
                          {province}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Filter className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t.categories}
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="ultra-glass">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category, index) => {
                      const categoryKey = index === 0 ? 'all' : CATEGORIES.fa[index];
                      return (
                        <SelectItem key={category} value={categoryKey}>
                          {category}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Min Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {language === 'fa' ? 'حداقل قیمت' : 'Min Price'}
                </label>
                <Input
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="ultra-glass"
                />
              </div>

              {/* Max Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {language === 'fa' ? 'حداکثر قیمت' : 'Max Price'}
                </label>
                <Input
                  type="number"
                  placeholder="∞"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="ultra-glass"
                />
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="mt-4 pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {searchQuery}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSearchQuery('')}
                      />
                    </Badge>
                  )}
                  {selectedProvince !== 'all' && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {provinces[AFGHANISTAN_PROVINCES.fa.indexOf(selectedProvince)]}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedProvince('all')}
                      />
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Filter className="h-3 w-3" />
                      {categories[CATEGORIES.fa.indexOf(selectedCategory)]}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedCategory('all')}
                      />
                    </Badge>
                  )}
                  {minPrice && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {language === 'fa' ? 'از' : 'From'} {minPrice} AFN
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setMinPrice('')}
                      />
                    </Badge>
                  )}
                  {maxPrice && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {language === 'fa' ? 'تا' : 'To'} {maxPrice} AFN
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setMaxPrice('')}
                      />
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
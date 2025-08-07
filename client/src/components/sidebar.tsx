import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { AFGHANISTAN_PROVINCES, CATEGORIES } from '@/lib/constants';
import { ChevronLeft } from 'lucide-react';

interface SidebarProps {
  selectedProvince: string;
  selectedCategory: string;
  onProvinceChange: (province: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function Sidebar({ 
  selectedProvince, 
  selectedCategory, 
  onProvinceChange, 
  onCategoryChange 
}: SidebarProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const provinces = AFGHANISTAN_PROVINCES[language];
  const categories = CATEGORIES[language];

  return (
    <aside className="lg:w-80 space-y-6">
      {/* Province Filter */}
      <Card className="ultra-glass">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gradient-animated">
            {t.selectProvince}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-2">
              {provinces.map((province, index) => {
                const provinceKey = index === 0 ? 'all' : AFGHANISTAN_PROVINCES.fa[index];
                return (
                  <Button
                    key={province}
                    variant={selectedProvince === provinceKey ? "default" : "ghost"}
                    className="w-full justify-start text-right rtl:text-right ltr:text-left"
                    onClick={() => onProvinceChange(provinceKey)}
                  >
                    {province}
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card className="ultra-glass">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gradient-animated">
            {t.categories}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category, index) => {
              const categoryKey = index === 0 ? 'all' : CATEGORIES.fa[index];
              return (
                <Button
                  key={category}
                  variant={selectedCategory === categoryKey ? "default" : "ghost"}
                  className="w-full justify-between text-right rtl:text-right ltr:text-left"
                  onClick={() => onCategoryChange(categoryKey)}
                >
                  <span>{category}</span>
                  <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}

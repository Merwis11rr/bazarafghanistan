import { TrendingUp, Eye, Heart, Share } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

interface ItemStatsProps {
  totalItems: number;
  totalViews?: number;
  trending?: number;
  favorites?: number;
}

export default function ItemStats({ 
  totalItems, 
  totalViews = 0, 
  trending = 0, 
  favorites = 0 
}: ItemStatsProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: TrendingUp,
      value: totalItems.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US'),
      label: t.activeAds || (language === 'fa' ? 'آگهی فعال' : 'Active Ads'),
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Eye,
      value: totalViews.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US'),
      label: language === 'fa' ? 'بازدید امروز' : 'Views Today',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: TrendingUp,
      value: trending.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US'),
      label: language === 'fa' ? 'در حال پرطرفدار شدن' : 'Trending',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10'
    },
    {
      icon: Heart,
      value: favorites.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US'),
      label: language === 'fa' ? 'مورد علاقه‌ها' : 'Favorites',
      color: 'text-red-500',
      bg: 'bg-red-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="ultra-glass hover:scale-105 transition-transform duration-300">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className={`p-3 rounded-full ${stat.bg} animate-pulse-slow`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${stat.color} animate-float`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
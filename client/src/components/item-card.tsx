import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import type { Item } from '@shared/schema';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const title = language === 'fa' ? item.titleFa : item.titleEn;
  const price = item.price.toLocaleString(language === 'fa' ? 'fa-AF' : 'en-US');

  return (
    <Card className="overflow-hidden ultra-glass card-hover cursor-pointer group">
      {/* Item image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/5 to-blue-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:right-3 ltr:left-auto">
          <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-md animate-pulse-slow neon-glow">
            {price} {item.currency}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Item details */}
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
            {item.province}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
            {t.today}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {t.category} {item.category}
          </span>
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

import { Search, Plus, Sun, Moon, Languages, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from './theme-provider';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 ultra-glass border-b transition-all duration-300 animate-float">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center group">
              <Store className="h-8 w-8 text-primary mr-2 rtl:mr-0 rtl:ml-2 animate-float group-hover:animate-glow transition-all duration-300" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-solid via-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                {t.siteTitle}
              </h1>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative group">
              <Input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 rtl:pl-4 rtl:pr-10 gradient-card glass-effect border-2 border-transparent focus:border-primary-solid transition-all duration-300 focus:scale-105"
              />
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-solid transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-solid/10 via-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'fa' ? 'en' : 'fa')}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">
                {language === 'fa' ? 'فارسی' : 'English'}
              </span>
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            {/* Add Item Button */}
            <Button className="btn-gradient text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105">
              <Plus className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {t.newAd}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Heart, Globe, Mail, Github, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t ultra-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gradient-animated">
              {t.siteTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'fa' 
                ? 'بازارچه آنلاین افغانستان با پشتیبانی کامل از زبان‌های فارسی و انگلیسی'
                : 'Afghanistan\'s premier online marketplace with full bilingual support'
              }
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Globe className="h-5 w-5 text-emerald-500 animate-pulse-slow" />
              <Heart className="h-5 w-5 text-red-500 animate-float" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">
              {language === 'fa' ? 'لینک‌های سریع' : 'Quick Links'}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'درباره ما' : 'About Us'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'تماس با ما' : 'Contact'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'راهنمای استفاده' : 'Help'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'قوانین و مقررات' : 'Terms'}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">
              {language === 'fa' ? 'دسته‌بندی‌های محبوب' : 'Popular Categories'}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'خودرو' : 'Vehicles'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'املاک' : 'Real Estate'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'لوازم خانگی' : 'Home & Garden'}
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {language === 'fa' ? 'لوازم الکترونیکی' : 'Electronics'}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">
              {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@afghanistan-market.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Github className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              {language === 'fa' 
                ? `© ${currentYear} بازار افغانستان. تمامی حقوق محفوظ است.`
                : `© ${currentYear} Afghanistan Marketplace. All rights reserved.`
              }
            </div>
            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
              <span>
                {language === 'fa' ? 'ساخته شده با' : 'Made with'}
              </span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>
                {language === 'fa' ? 'برای افغانستان' : 'for Afghanistan'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
# شروع سریع | Quick Start Guide

## 🚀 نصب فوری | Instant Setup

### گام ۱: کپی کردن پروژه
```bash
git clone https://github.com/yourusername/afghanistan-marketplace.git
cd afghanistan-marketplace
npm install
npm run dev
```

### گام ۲: استقرار در Replit
1. Fork کردن در Replit
2. Run کلیک کنید
3. Deploy کلیک کنید
4. آدرس `.replit.app` شما آماده است!

### گام ۳: استقرار در GitHub Pages
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
# خودکاراً در GitHub Pages منتشر می‌شود
```

## 📋 چک‌لیست آماده‌سازی | Production Checklist

### ✅ قبل از انتشار
- [ ] تست در مرورگرهای مختلف (Chrome, Firefox, Safari)
- [ ] بررسی responsive design در اندازه‌های مختلف
- [ ] تست زبان‌های فارسی و انگلیسی
- [ ] بررسی عملکرد جستجو و فیلترها
- [ ] تست theme switching (روشن/تاریک)
- [ ] بررسی loading states و animations

### 🔧 تنظیمات تولید
```bash
# Build برای production
npm run build

# Preview کردن build
npm run preview

# Type checking
npm run check
```

### 🌐 تنظیم دامنه سفارشی
1. **GitHub Pages**: Settings > Pages > Custom domain
2. **Replit**: Deployments > Custom domains
3. **Vercel**: Project Settings > Domains

### 📊 نظارت و تحلیل
```javascript
// Google Analytics (اختیاری)
// در index.html اضافه کنید:
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 شخصی‌سازی سریع | Quick Customization

### تغییر رنگ‌ها
```css
/* در client/src/index.css */
:root {
  --primary: 142 69 173; /* بنفش */
  --secondary: 251 113 133; /* صورتی */
  /* یا هر رنگ دلخواه */
}
```

### اضافه کردن آیتم‌های جدید
```typescript
// در server/storage.ts
// آیتم‌های بیشتر اضافه کنید یا API خارجی متصل کنید
```

### تنظیم متغیرهای محیطی
```env
# .env فایل
DATABASE_URL=your_database_url
NODE_ENV=production
VITE_API_URL=https://your-domain.com/api
```

## 🔗 لینک‌های مفید | Useful Links

- 📖 [مستندات کامل](./README.md)
- 🚀 [راهنمای استقرار](./DEPLOYMENT.md) 
- 👥 [راهنمای GitHub](./GITHUB_SETUP.md)
- ✨ [لیست ویژگی‌ها](./FEATURES.md)
- 🐛 [گزارش مشکل](https://github.com/yourusername/afghanistan-marketplace/issues)

## 🆘 پشتیبانی سریع | Quick Support

### مشکلات رایج:
```bash
# خطای npm install
rm -rf node_modules package-lock.json
npm install

# مشکل hot reload
npm run dev

# خطای build
npm run check
npm run build
```

### برای کمک:
- GitHub Issues برای باگ‌ها
- Discussions برای سؤالات
- Pull Requests برای بهبودها

---

**در کمتر از ۵ دقیقه آماده! 🎉**
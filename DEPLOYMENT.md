# راهنمای استقرار | Deployment Guide

این راهنمای کاملی برای استقرار بازار افغانستان در پلتفرم‌های مختلف است.

## 🚀 روش‌های استقرار | Deployment Methods

### 1. GitHub Pages (رایگان)

#### قدم اول: آماده‌سازی مخزن
```bash
# کلون کردن پروژه
git clone https://github.com/yourusername/afghanistan-marketplace.git
cd afghanistan-marketplace

# نصب وابستگی‌ها
npm install

# تست محلی
npm run dev
```

#### قدم دوم: تنظیم GitHub Pages
1. به مخزن GitHub بروید
2. Settings > Pages
3. Source: GitHub Actions را انتخاب کنید
4. فایل workflow از پوشه `.github/workflows/deploy.yml` استفاده می‌شود

#### قدم سوم: Push و استقرار خودکار
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

وب‌سایت در آدرس `https://yourusername.github.io/afghanistan-marketplace` در دسترس خواهد بود.

### 2. Replit (توصیه شده)

#### مزایا:
- استقرار آسان و سریع
- پایگاه داده PostgreSQL داخلی
- SSL رایگان
- دامنه اختصاصی

#### قدم‌ها:
1. کد را در Replit import کنید
2. متغیرهای محیطی را در Secrets تنظیم کنید:
   ```
   DATABASE_URL=your_postgres_url
   NODE_ENV=production
   ```
3. Run کلیک کنید
4. Deploy کلیک کنید

### 3. Vercel

#### نصب Vercel CLI:
```bash
npm i -g vercel
```

#### استقرار:
```bash
# در پوشه پروژه
vercel

# تنظیم متغیرهای محیطی در Vercel Dashboard
# NODE_ENV=production
# DATABASE_URL=your_postgres_url
```

### 4. Netlify

#### روش اول: Git Integration
1. مخزن GitHub را به Netlify متصل کنید
2. Build command: `npm run build`
3. Publish directory: `dist`

#### روش دوم: Manual Deploy
```bash
npm run build
# Upload dist folder to Netlify
```

### 5. Railway

```bash
# نصب Railway CLI
npm install -g @railway/cli

# ورود به Railway
railway login

# ایجاد پروژه جدید
railway init

# استقرار
railway up
```

## 🔧 تنظیمات پیشرفته | Advanced Configuration

### متغیرهای محیطی
```env
# Production Environment Variables
NODE_ENV=production
DATABASE_URL=postgresql://user:pass@host:port/db
VITE_API_URL=https://your-domain.com/api
```

### Docker Deployment
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]
```

#### Docker Commands:
```bash
# ساخت image
docker build -t afghanistan-marketplace .

# اجرای container
docker run -p 5000:5000 afghanistan-marketplace
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 پایگاه داده | Database Setup

### PostgreSQL (Production)
```sql
-- ایجاد پایگاه داده
CREATE DATABASE afghanistan_marketplace;

-- اجرای migrations
npx drizzle-kit push:pg
```

### Environment برای Database:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/afghanistan_marketplace"
```

## 🔐 امنیت | Security

### SSL Certificate
```bash
# Let's Encrypt با Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Environment Secrets
- هرگز کلیدهای API را در کد commit نکنید
- از متغیرهای محیطی استفاده کنید
- از .gitignore برای محافظت از .env استفاده کنید

## 📈 بهینه‌سازی عملکرد | Performance Optimization

### Build Optimization
```bash
# بهینه‌سازی bundle size
npm run build -- --analyze

# Compression
npm install compression
```

### CDN Setup
```javascript
// Static assets را در CDN قرار دهید
const CDN_URL = 'https://cdn.your-domain.com';
```

## 🔍 نظارت | Monitoring

### Health Check
```javascript
// در server/index.ts
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
```

### Logging
```javascript
// اضافه کردن Winston logger
npm install winston
```

## 🚨 عیب‌یابی | Troubleshooting

### مشکلات رایج:

#### 1. Build Errors
```bash
# پاک کردن cache
rm -rf node_modules package-lock.json
npm install
```

#### 2. Environment Variables
```bash
# چک کردن متغیرها
echo $NODE_ENV
echo $DATABASE_URL
```

#### 3. Port Issues
```javascript
// استفاده از PORT environment variable
const PORT = process.env.PORT || 5000;
```

## 📞 پشتیبانی | Support

اگر مشکلی در استقرار داشتید:

1. **GitHub Issues**: مشکل را در GitHub گزارش کنید
2. **Documentation**: مستندات بیشتر در Wiki
3. **Community**: از جامعه کمک بگیرید

---

**موفقیت در استقرار! 🎉**
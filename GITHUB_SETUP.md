# راهنمای کامل GitHub | Complete GitHub Setup Guide

## 🚀 تنظیم اولیه مخزن GitHub

### 1. ایجاد مخزن جدید
```bash
# در GitHub.com یک repository جدید با نام afghanistan-marketplace ایجاد کنید
# سپس commands زیر را اجرا کنید:

git init
git add .
git commit -m "Initial commit: Afghanistan Marketplace with premium UI"
git branch -M main
git remote add origin https://github.com/yourusername/afghanistan-marketplace.git
git push -u origin main
```

### 2. تنظیم GitHub Pages (استقرار رایگان)
1. به Settings مخزن بروید
2. بخش Pages را پیدا کنید
3. Source: "GitHub Actions" را انتخاب کنید
4. فایل workflow خودکاراً از `.github/workflows/deploy.yml` استفاده می‌کند

### 3. تنظیم Secrets (اگر نیاز به API keys دارید)
1. Settings > Secrets and variables > Actions
2. Repository secrets اضافه کنید:
   - `DATABASE_URL`: آدرس پایگاه داده
   - `NODE_ENV`: production
   - سایر کلیدهای API

## 📝 شاخه‌بندی و مدیریت نسخه‌ها

### ساختار شاخه‌ها (Git Flow)
```bash
main/master     # شاخه اصلی - فقط کد stable
develop         # شاخه توسعه - آخرین تغییرات
feature/*       # شاخه‌های ویژگی جدید
hotfix/*        # رفع باگ‌های اضطراری
release/*       # آماده‌سازی نسخه جدید
```

### دستورات Git مفید
```bash
# ایجاد شاخه جدید برای ویژگی
git checkout -b feature/new-feature
git push -u origin feature/new-feature

# Merge کردن ویژگی به develop
git checkout develop
git merge feature/new-feature

# Tag گذاری برای نسخه جدید
git tag -a v1.0.0 -m "Version 1.0.0: Initial release"
git push --tags
```

## 🔄 Workflow های خودکار

### 1. Continuous Integration (CI)
فایل `.github/workflows/ci.yml`:
```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Type check
      run: npm run check
    
    - name: Build
      run: npm run build
```

### 2. Security Scanning
فایل `.github/workflows/security.yml`:
```yaml
name: Security Scan

on:
  schedule:
    - cron: '0 2 * * 1'  # هر دوشنبه ساعت 2 صبح
  push:
    branches: [ main ]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Run npm audit
      run: npm audit --audit-level high
    
    - name: Run Snyk security scan
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

## 📋 Templates مفید

### Pull Request Template
فایل `.github/pull_request_template.md`:
```markdown
## تغییرات | Changes
- [ ] ویژگی جدید
- [ ] رفع باگ
- [ ] بهبود UI/UX
- [ ] بهینه‌سازی عملکرد

## شرح تغییرات | Description
<!-- توضیح کاملی از تغییراتتان بدهید -->

## تست | Testing
- [ ] تست در مرورگرهای مختلف
- [ ] تست responsive design
- [ ] تست با داده‌های واقعی

## Screenshots
<!-- اگر تغییرات UI دارید، عکس اضافه کنید -->
```

### Issue Template
فایل `.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug Report
about: گزارش باگ
title: "[BUG] "
labels: bug
---

## توضیح باگ | Bug Description
توضیح واضحی از مشکل بدهید

## مراحل تکرار | Steps to Reproduce
1. برو به '...'
2. کلیک کن روی '....'
3. اسکرول کن به '....'
4. مشکل رو ببین

## رفتار مورد انتظار | Expected Behavior
چه اتفاقی باید می‌افتاد

## Screenshots
اگر مناسب است، عکس اضافه کنید

## محیط | Environment
- مرورگر: [e.g. Chrome, Safari]
- نسخه: [e.g. 22]
- سیستم عامل: [e.g. iOS]
```

## 🏷️ نسخه‌بندی و انتشار | Versioning & Releases

### Semantic Versioning
```bash
# نسخه اصلی: تغییرات breaking
1.0.0 → 2.0.0

# نسخه فرعی: ویژگی‌های جدید
1.0.0 → 1.1.0

# رفع باگ: پچ
1.0.0 → 1.0.1
```

### خودکارسازی Release
فایل `.github/workflows/release.yml`:
```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Build
      run: |
        npm ci
        npm run build
    
    - name: Create Release
      uses: actions/create-release@v1
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        tag_name: ${{ github.ref }}
        release_name: Release ${{ github.ref }}
        draft: false
        prerelease: false
```

## 👥 مشارکت | Contributing

### راهنمای مشارکت
فایل `CONTRIBUTING.md`:
```markdown
# راهنمای مشارکت

## پیش از شروع
1. Fork کنید
2. شاخه جدید ایجاد کنید
3. تغییراتتان را commit کنید
4. Pull Request ارسال کنید

## استانداردهای کد
- TypeScript استفاده کنید
- Tailwind CSS برای styling
- Components را reusable بسازید
- Comment های مناسب بنویسید

## تست
- تغییرات را در چندین مرورگر تست کنید
- Responsive design را چک کنید
- Performance را بررسی کنید
```

## 📊 Analytics و نظارت

### GitHub Insights
- Pulse: فعالیت هفتگی
- Contributors: مشارکت‌کنندگان
- Traffic: ترافیک repository
- Forks: تعداد fork ها

### Protected Branches
1. Settings > Branches
2. Add rule برای main branch:
   - Require pull request reviews
   - Require status checks
   - Restrict pushes

## 🔧 Tools و Extensions مفید

### GitHub CLI
```bash
# نصب GitHub CLI
# macOS
brew install gh

# Ubuntu/Debian
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# استفاده
gh auth login
gh repo create afghanistan-marketplace --public
gh pr create --title "New feature" --body "Description"
```

### VSCode Extensions
```json
{
  "recommendations": [
    "github.vscode-pull-request-github",
    "github.copilot",
    "ms-vscode.vscode-github-actions",
    "github.vscode-github-actions"
  ]
}
```

## 🚀 نکات بهینه‌سازی

### بهبود SEO Repository
1. README جامع بنویسید
2. Topics مناسب اضافه کنید
3. Description واضح بنویسید
4. License اضافه کنید

### Social Media Cards
```html
<!-- در index.html -->
<meta property="og:title" content="Afghanistan Marketplace" />
<meta property="og:description" content="Premium bilingual marketplace for Afghanistan" />
<meta property="og:image" content="https://your-domain.com/preview.png" />
```

---

**آماده برای انتشار در GitHub! 🎉**
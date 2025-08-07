# بازار افغانستان | Afghanistan Marketplace

A premium bilingual online marketplace platform designed specifically for Afghanistan with Persian/English support and modern glassmorphism UI.

## 🌟 Features

- **Bilingual Support**: Complete Persian (Dari) and English localization with RTL/LTR text direction
- **34 Provinces Coverage**: All Afghanistan provinces with bilingual names
- **Premium UI/UX**: Modern glassmorphism effects, gradient backgrounds, and smooth animations
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Category Filtering**: Multiple product categories with advanced filtering
- **Search Functionality**: Real-time search with province and category filters
- **Theme Support**: Light/dark mode with custom color schemes
- **Type Safety**: Full TypeScript implementation with Zod validation

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **TanStack Query** for server state management
- **Wouter** for lightweight routing
- **Framer Motion** for animations

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Drizzle ORM** with PostgreSQL support
- **Zod** for schema validation
- **In-memory storage** for development

### Development Tools
- **ESBuild** for fast bundling
- **PostCSS** with Autoprefixer
- **TypeScript** compiler
- **Hot reload** development server

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Clone Repository
```bash
git clone https://github.com/yourusername/afghanistan-marketplace.git
cd afghanistan-marketplace
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
Create a `.env` file in the root directory:
```env
NODE_ENV=development
DATABASE_URL=your_postgresql_url_here
VITE_API_URL=http://localhost:5000/api
```

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🏗️ Project Structure

```
afghanistan-marketplace/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   ├── pages/         # Application pages
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite middleware
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema definitions
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── drizzle.config.ts
```

## 🎨 UI Components

### Premium Design Features
- **Ultra Glassmorphism**: Advanced backdrop blur with saturation
- **Gradient Backgrounds**: Multi-layer gradient compositions
- **Particle Effects**: Animated background particles
- **Neon Glow Effects**: Subtle lighting on interactive elements
- **Smooth Animations**: Float, shimmer, and gradient shift animations
- **3D Card Effects**: Subtle hover transformations

### Component Library
- Header with bilingual navigation
- Advanced sidebar filtering
- Item cards with premium styling
- Search with focus effects
- Theme and language toggles
- Loading skeletons
- Responsive grid layouts

## 🌐 Internationalization

### Supported Languages
- **Persian (Dari)**: Default language with RTL support
- **English**: Secondary language with LTR support

### Geographic Coverage
Complete coverage of Afghanistan's 34 provinces:
- Badakhshan, Badghis, Baghlan, Balkh, Bamyan
- Daykundi, Farah, Faryab, Ghazni, Ghor
- Helmand, Herat, Jowzjan, Kabul, Kandahar
- Kapisa, Khost, Kunar, Kunduz, Laghman
- Logar, Nangarhar, Nimroz, Nuristan, Paktia
- Paktika, Panjshir, Parwan, Samangan, Sar-e Pol
- Takhar, Urozgan, Wardak, Zabul

## 📱 API Endpoints

### Items API
- `GET /api/items` - Fetch all marketplace items
- Query parameters:
  - `province`: Filter by province
  - `category`: Filter by category
  - `search`: Search in titles
  - `sort`: Sort order (newest, cheapest, mostExpensive)

## 🚀 Deployment

### Replit Deployment
1. Fork the repository on Replit
2. Set environment variables in Replit Secrets
3. Run `npm run dev` to start the application
4. Use Replit's deployment feature for production

### GitHub Pages (Frontend Only)
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variables

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # ESLint code linting
```

### Database Setup
For production, configure PostgreSQL:
```bash
# Install Drizzle CLI
npm install -g drizzle-kit

# Generate migrations
npx drizzle-kit generate:pg

# Run migrations
npx drizzle-kit push:pg
```

## 🎯 Features Roadmap

### Completed ✅
- [x] Bilingual marketplace platform
- [x] 34 provinces coverage
- [x] Premium glassmorphism UI
- [x] Advanced filtering system
- [x] Responsive design
- [x] Theme support
- [x] Type-safe implementation

### Future Enhancements 🚀
- [ ] User authentication system
- [ ] Real-time messaging
- [ ] Payment integration
- [ ] Image upload functionality
- [ ] Advanced search algorithms
- [ ] Mobile application
- [ ] Admin dashboard
- [ ] Analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain bilingual support
- Write comprehensive tests
- Document new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Replit** for the amazing development platform
- **Shadcn/ui** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **Afghanistan** provinces and culture inspiration

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact: your-email@example.com
- Documentation: [Project Wiki](https://github.com/yourusername/afghanistan-marketplace/wiki)

---

**Built with ❤️ for Afghanistan**
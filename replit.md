# Afghanistan Marketplace

## Overview

This project is a bilingual (Persian/English) online marketplace platform specifically designed for Afghanistan. It functions as a classified ads platform where users can browse items by category and province, with full right-to-left (RTL) language support for Persian and English language capabilities. The application features a modern, responsive design built with React and a REST API backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Context for theme and language state, TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Internationalization**: Custom i18n implementation with Persian and English support
- **Typography**: Vazir font for Persian text, Inter font for English text

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with endpoints for item filtering by province and category
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload with Vite integration in development mode
- **Build**: ESBuild for production bundling

### Data Storage Solutions
- **Current**: In-memory storage with mock data generation for Afghanistan provinces and items
- **Configured**: Drizzle ORM with PostgreSQL schema ready for production deployment
- **Schema**: Items table with bilingual titles, pricing in AFN currency, categorization, and geographic location

### Internationalization & Localization
- **Languages**: Persian (default, RTL) and English (LTR)
- **Geographic Data**: Complete Afghanistan province listings in both languages
- **Currency**: Afghan Afghani (AFN) with proper formatting
- **Content**: Bilingual item titles and descriptions

### UI/UX Design Patterns
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Theme System**: Light/dark mode support with CSS custom properties
- **Component Architecture**: Reusable UI components with consistent design tokens
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and development experience
- **esbuild**: Fast JavaScript bundler for production

### Database Configuration
- **PostgreSQL**: Primary database (via DATABASE_URL environment variable)
- **Drizzle Kit**: Database migration and schema management tools
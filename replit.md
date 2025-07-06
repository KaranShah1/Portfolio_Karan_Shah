# Portfolio Website - replit.md

## Overview
This is a modern portfolio website for a data scientist showcasing professional experience, projects, education, and achievements. Built with React and Express.js in a full-stack TypeScript application, featuring a responsive design with shadcn/ui components and Tailwind CSS styling.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution
- **API Design**: RESTful endpoints under `/api` prefix
- **File Serving**: Static file serving with Vite integration in development

### Database Integration
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definitions in `/shared` directory
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations
- **Storage Abstraction**: Interface-based storage layer with memory implementation

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Profile introduction with call-to-action buttons
- **Skills Section**: Technical expertise showcase
- **Experience Section**: Professional experience timeline
- **Projects Section**: Portfolio projects with filtering and detailed views
- **Education Section**: Academic background
- **Achievements Section**: Personal accomplishments and interests
- **Contact Section**: Contact form with server integration

### Backend Services
- **Contact API**: Form submission endpoint with validation
- **Resume Download**: Dynamic resume generation and download
- **Error Handling**: Centralized error middleware
- **Request Logging**: Custom logging middleware for API requests

### Database Schema
- **Users Table**: User authentication (prepared for future use)
- **Contact Messages Table**: Contact form submissions storage

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Data Storage**: Contact messages stored via abstracted storage interface
4. **Response**: JSON responses with appropriate status codes
5. **Client Updates**: React Query manages cache updates and UI state

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM)
- Routing: wouter
- State management: @tanstack/react-query
- UI components: @radix-ui/* packages
- Styling: tailwindcss, class-variance-authority, clsx
- Form handling: react-hook-form, @hookform/resolvers
- Date utilities: date-fns
- Icons: lucide-react

### Backend Dependencies
- Server: express
- Database: drizzle-orm, @neondatabase/serverless
- Validation: zod, drizzle-zod
- Session management: connect-pg-simple
- Development: tsx, vite

### Development Tools
- TypeScript for type safety
- Vite for build tooling and development server
- PostCSS with Tailwind CSS
- ESBuild for production builds

## Deployment Strategy

### Development
- **Hot Reload**: Vite development server with HMR
- **API Integration**: Express server proxied through Vite
- **Type Checking**: TypeScript compilation without emit
- **Database**: Drizzle push for schema synchronization

### Production
- **Build Process**: 
  1. Vite builds React app to `/dist/public`
  2. ESBuild bundles Express server to `/dist`
- **Server**: Node.js runs the bundled Express application
- **Static Files**: Express serves built React app
- **Database**: PostgreSQL with connection pooling

### Environment Configuration
- **Database URL**: Required environment variable
- **Node Environment**: Development/production mode switching
- **Replit Integration**: Special handling for Replit environment

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 06, 2025. Initial setup
- July 06, 2025. Replaced external GitHub-hosted project images with professional Unsplash stock photos for better presentation and reliability
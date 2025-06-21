# Vercel Deployment Guide

## Updated Folder Structure

```
project/
├── api/                     # Vercel serverless functions
│   └── contact.ts          # Contact form API endpoint
├── client/                 # Frontend React app
│   ├── src/
│   └── index.html
├── server/                 # Backend utilities (for API functions)
│   ├── db.ts              # Database connection
│   └── storage.ts         # Database operations
├── shared/                # Shared types and schemas
│   └── schema.ts
├── dist/                  # Built frontend (auto-generated)
├── vercel.json           # Vercel configuration
├── vite.config.ts        # Updated Vite config
├── drizzle.config.ts
└── package.json
```

## Key Changes Made

### 1. Database Migration
- ✅ Replaced in-memory Map storage with PostgreSQL
- ✅ Updated storage.ts to use Drizzle ORM with database
- ✅ Created db.ts for database connection

### 2. API Routes Conversion
- ✅ Created `/api/contact.ts` as Vercel serverless function
- ✅ Maintained Zod validation with `insertContactMessageSchema`
- ✅ Added proper CORS headers for frontend communication

### 3. Build Configuration
- ✅ Updated `vite.config.ts` for static build output
- ✅ Created `vercel.json` with proper routing configuration
- ✅ Configured API proxy for development

## Environment Variables for Vercel

Set these in your Vercel dashboard:

```
DATABASE_URL=your_postgresql_connection_string
PGPORT=5432
PGUSER=your_db_user
PGPASSWORD=your_db_password
PGDATABASE=your_db_name
PGHOST=your_db_host
```

## Deployment Steps

1. **Push database schema:**
   ```bash
   npm run db:push
   ```

2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

3. **Login to Vercel:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

## API Endpoint Usage

The contact form now uses:
- **Development:** `http://localhost:3000/api/contact`
- **Production:** `https://your-app.vercel.app/api/contact`

## Frontend Changes

The frontend automatically detects the environment and routes API calls correctly. No changes needed to your React components.

## Testing Locally

1. **Start development:**
   ```bash
   npm run dev
   ```

2. **Test API endpoint:**
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","subject":"Test","message":"Hello world"}'
   ```

## Production Considerations

- ✅ Database connections are handled efficiently
- ✅ Environment variables are secure
- ✅ CORS is properly configured
- ✅ Error handling includes validation
- ✅ Static assets are optimized

Your app is now ready for Vercel deployment with serverless architecture!
# Recipe Explorer Application

This is a fullstack application that provides information about recipes using TheMealDB API. The application consists of a backend built with Express.js and TypeScript, and a frontend built with Next.js and TypeScript.

## Project Structure

```
/
├── backend/         # Express.js + TypeScript backend
└── frontend/        # Next.js + TypeScript frontend
```

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following content:
```
PORT=3001
THEMEALDB_API_URL=https://www.themealdb.com/api/json/v1/1
```

4. Start the development server:
```bash
npm run dev
```

The backend will be available at http://localhost:3001

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the frontend directory with the following content:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## Running Both Applications

1. Open two terminal windows
2. In the first terminal, start the backend:
```bash
cd backend
npm run dev
```

3. In the second terminal, start the frontend:
```bash
cd frontend
npm run dev
```

4. Open your browser and navigate to http://localhost:3000

## Features

- View all available recipes
- Filter recipes by ingredient, country, or category
- View detailed recipe information
- Responsive design
- TypeScript support
- ESLint and Prettier configuration for code quality

## API Documentation

The backend provides the following endpoints:

- `GET /api/recipes` - Get all recipes with optional filters:
  - `?ingredient=chicken_breast` - Filter by ingredient
  - `?country=Canadian` - Filter by country
  - `?category=Seafood` - Filter by category
- `GET /api/recipes/:id` - Get detailed information about a specific recipe

## Tech Stack

### Backend
- Express.js
- TypeScript
- Node.js
- Axios for API calls
- dotenv for environment variables

### Frontend
- Next.js 14
- React.js
- TypeScript
- Tailwind CSS for styling
- Axios for API calls 
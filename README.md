# Express Server with Supabase Authentication

A Node.js Express server with authentication using Supabase database.

## Features
- POST `/login` - User authentication with username/password
- GET `/products` - Protected endpoint returning products data


## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and fill in your Supabase credentials:
```bash
cp .env.example .env
```

Edit `.env` with your actual values:
```
PORT=3000
SUPABASE_URL=your-supabase-project-url
SUPABASE_KEY=your-supabase-anon-key
```

### 3. Supabase Database Setup

#### Create Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- Insert test user (for demo only - use hashed passwords in production)
INSERT INTO users (username, password) VALUES ('Ariel', '1234');
```

#### Import Products Table
- Import the classicmodels database into your Supabase project
- Only the `products` table is required

### 4. Run the Server
```bash
# Development (with file watching)
npm run dev

# Production
npm start
```

## API Endpoints

### POST /login
Authenticate user with username and password.

**Request Body:**
```json
{
  "username": "Ariel",
  "password": "1234"
}
```

**Response (Success):**
```json
{
  "message": "Login successful"
}
```

**Response (Error):**
```json
{
  "error": "Wrong username or password"
}
```

### GET /products
Get all products (requires authentication).

**Authentication:** Send username and password in:
- Request body (JSON), OR
- Request headers (`username` and `password`)

**Response (Success):**
```json
[
  {
    "productCode": "S10_1678",
    "productName": "1969 Harley Davidson Ultimate Chopper",
    "productLine": "Motorcycles",
    // ... other product fields
  }
]
```

**Response (Error):**
```json
{
  "error": "Unauthorized"
}
```

## Security Notes

⚠️ **Important:** This implementation stores passwords in plain text for learning purposes only.
## Project Structure
```
├── server.js              # Main server file
├── config/
│   └── supabaseClient.js   # Supabase client configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── productsController.js # Products logic
├── middlewares/
│   └── authMiddleware.js   # Authentication middleware
└── routes/
    ├── auth.js            # Authentication routes
    ├── products.js        # Products routes
    └── rootIndex.js       # Root routes
```

# API Testing Guide

This file contains example API calls for testing the server endpoints.

## Prerequisites
- Server nedd to running on http://localhost:3000
- Supabase database must be configured with users and products tables

## Test Login Endpoint

### Valid Login (after creating users table)
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "Ariel", "password": "1234"}'
```

### Invalid Login
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username": "wronguser", "password": "wrongpass"}'
```

## Test Products Endpoint

### With credentials in body
```bash
curl -X GET http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"username": "Ariel", "password": "1234"}'
```

### With credentials in headers
```bash
curl -X GET http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -H "username: Ariel" \
  -H "password: 1234"
```

### Without credentials (should fail)
```bash
curl -X GET http://localhost:3000/products \
  -H "Content-Type: application/json"
```

## Database Setup Required

Before testing, you need to:

1. **Create users table in Supabase:**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES ('Ariel', '1234');
```

2. **Import products table from classicmodels database**

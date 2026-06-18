# 🧹 Natura Baby & Mother Care — Cleaning Service

A full-stack cleaning service booking platform built with React, Node.js, Express, and PostgreSQL (Supabase).

## ✨ Features

- **Beautiful Landing Page** — Modern, responsive design with animations
- **6 Cleaning Services** — Home, Office, Deep, Sofa, Carpet, Bathroom cleaning
- **User Authentication** — Register, login, JWT-based sessions
- **Booking System** — Book services with date/time selection
- **User Dashboard** — View booking history, manage profile
- **Admin Dashboard** — Manage bookings, customers, view analytics
- **Contact Form** — Customer inquiries with backend storage
- **Responsive Design** — Mobile-first, works on all devices

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + Tailwind CSS v3 |
| Backend | Node.js + Express.js |
| Database | PostgreSQL (Supabase) |
| Auth | JWT + bcryptjs |

## 📁 Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── database/        # SQL schema & migrations
└── docs/            # API & deployment docs
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (for database)

### 1. Clone & Install

```bash
# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install
```

### 2. Configure Environment

```bash
# Copy environment template
cp server/.env.example server/.env

# Edit server/.env with your Supabase credentials
```

### 3. Setup Database

Run the SQL files in `database/` in your Supabase SQL editor:
1. `schema.sql` — Creates all tables
2. `seed.sql` — Populates initial service data

### 4. Run Development Servers

```bash
# Terminal 1: Start backend
cd server && npm run dev

# Terminal 2: Start frontend
cd client && npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## 📖 Documentation

- [API Documentation](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 📄 License

MIT © Natura Baby & Mother Care

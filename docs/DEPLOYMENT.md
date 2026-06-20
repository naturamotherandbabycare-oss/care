# 🚀 Deployment Guide — Natura Cleaning Service

This guide explains how to deploy the Natura Baby & Mother Care Cleaning Service application to production.

---

## 🗄️ 1. Database Setup (Supabase)

Supabase provides a hosted PostgreSQL database.

### Steps:
1. Create a free account on [Supabase](https://supabase.com/).
2. Create a new project named `natura-cleaning`.
3. Go to the **SQL Editor** in the Supabase dashboard.
4. Open the [database/schema.sql](file:///../database/schema.sql) file from this codebase, copy its content, paste it into the editor, and click **Run**. This will create the required tables (`users`, `services`, `bookings`, `contact_messages`), indexes, and auto-update triggers.
5. Open the [database/seed.sql](file:///../database/seed.sql) file, copy its content, paste it into the editor, and click **Run**. This will populate the 6 cleaning services and seed the default admin account.

---

## 💻 2. Backend Deployment (Render)

Render is recommended for hosting Node.js Express APIs.

### Steps:
1. Sign in to [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository containing the codebase.
4. Configure the service settings:
   - **Name:** `natura-cleaning-api`
   - **Environment:** `Node`
   - **Region:** Choose the region closest to Gujarat, India (e.g., Singapore).
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free tier
5. Add the following **Environment Variables** under the Advanced section:
   - `NODE_ENV`: `production`
   - `PORT`: `5000` (Render will override this, which is fine)
   - `SUPABASE_URL`: Get this from your Supabase dashboard (Project Settings -> API -> Project URL)
   - `SUPABASE_ANON_KEY`: Get this from Supabase dashboard (Project Settings -> API -> `anon` public key)
   - `SUPABASE_SERVICE_ROLE_KEY`: Get this from Supabase dashboard (Project Settings -> API -> `service_role` secret key)
   - `JWT_SECRET`: Generate a secure random string (e.g., using `openssl rand -hex 32`)
   - `CLIENT_URL`: URL of your deployed frontend (e.g., `https://natura-cleaning.vercel.app`)
6. Click **Deploy Web Service**. Render will build the project and launch your server. Note the deployed URL (e.g. `https://natura-cleaning-api.onrender.com`).

---

## 🎨 3. Frontend Deployment (Vercel)

Vercel is the easiest and most performant host for Vite + React single-page applications.

### Steps:
1. Sign in to [Vercel](https://vercel.com/).
2. Click **Add New** -> **Project**.
3. Import your GitHub repository.
4. Configure the project settings:
   - **Framework Preset:** Vite (detected automatically)
   - **Root Directory:** `client`
   - **Build and Output Settings:** Default (`npm run build`, output directory `dist`)
5. Add the following **Environment Variables**:
   - `VITE_API_URL`: The URL of your deployed Render backend (e.g., `https://natura-cleaning-api.onrender.com/api`)
6. Click **Deploy**. Vercel will build your assets and deploy the frontend.

---

## 🔧 4. Post-Deployment Verification

1. Go to your frontend URL.
2. Sign up as a new user.
3. Book a cleaning service.
4. Log out.
5. Log in with the default admin account:
   - **Email:** `naturamotherandbabycare@gmail.com`
   - **Password:** `admin123`
6. Verify you are redirected to the Admin page.
7. Locate the booking you just created under the Bookings tab.
8. Change its status to "Confirmed" or "Completed" and verify it saves.
9. Change the admin password immediately in the user profile section for security.

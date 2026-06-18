# 📖 Natura Cleaning Service API Documentation

All API routes are prefixed with `/api`.

---

## 🔐 Authentication API

### 1. Register User
* **Endpoint:** `POST /api/auth/register`
* **Authentication:** None (Public)
* **Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123",
  "phone": "+919876543210"
}
```
* **Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Registration successful!",
  "data": {
    "user": {
      "id": "u123-abc-...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "+919876543210",
      "role": "customer",
      "created_at": "2026-06-11T12:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
  }
}
```

### 2. Login User
* **Endpoint:** `POST /api/auth/login`
* **Authentication:** None (Public)
* **Request Body:**
```json
{
  "email": "jane@example.com",
  "password": "securepassword123"
}
```
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful!",
  "data": {
    "user": {
      "id": "u123-abc-...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "+919876543210",
      "role": "customer",
      "created_at": "2026-06-11T12:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
  }
}
```

### 3. Get Current User Session
* **Endpoint:** `GET /api/auth/me`
* **Headers:** `Authorization: Bearer <jwt_token>`
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "u123-abc-...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "+919876543210",
      "role": "customer"
    }
  }
}
```

### 4. Update Profile
* **Endpoint:** `PUT /api/auth/profile`
* **Headers:** `Authorization: Bearer <jwt_token>`
* **Request Body:**
```json
{
  "name": "Jane Smith",
  "phone": "+919999999999"
}
```
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully!",
  "data": {
    "user": {
      "id": "u123-abc-...",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+919999999999",
      "role": "customer",
      "created_at": "2026-06-11T12:00:00Z",
      "updated_at": "2026-06-11T12:05:00Z"
    }
  }
}
```

---

## 🧹 Services API

### 1. List All Active Services
* **Endpoint:** `GET /api/services`
* **Authentication:** None (Public)
* **Query Parameters:**
  * `category` (optional) - Filter by category e.g., `residential`, `commercial`, `specialty`
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "services": [
      {
        "id": "s123-abc-...",
        "name": "Home Deep Cleaning",
        "description": "Complete home deep cleaning service...",
        "category": "residential",
        "price": 2499.00,
        "duration_minutes": 180,
        "image_url": "/images/home-cleaning.jpg",
        "is_active": true,
        "created_at": "2026-06-11T12:00:00Z"
      }
    ]
  }
}
```

### 2. Get Service By ID
* **Endpoint:** `GET /api/services/:id`
* **Authentication:** None (Public)
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "service": {
      "id": "s123-abc-...",
      "name": "Home Deep Cleaning",
      "description": "Complete home deep cleaning service...",
      "category": "residential",
      "price": 2499.00,
      "duration_minutes": 180,
      "image_url": "/images/home-cleaning.jpg",
      "is_active": true,
      "created_at": "2026-06-11T12:00:00Z"
    }
  }
}
```

---

## 📅 Bookings API

### 1. Create a Booking
* **Endpoint:** `POST /api/bookings`
* **Headers:** `Authorization: Bearer <jwt_token>`
* **Request Body:**
```json
{
  "service_id": "s123-abc-...",
  "booking_date": "2026-06-15",
  "booking_time": "10:30:00",
  "address": "123 Green Valley, Satellite",
  "city": "Ahmedabad",
  "pincode": "380015",
  "phone": "+919876543210",
  "notes": "Please bring extra sanitization sprays."
}
```
* **Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Booking created successfully! We will confirm shortly.",
  "data": {
    "booking": {
      "id": "b123-xyz-...",
      "user_id": "u123-abc-...",
      "service_id": "s123-abc-...",
      "booking_date": "2026-06-15",
      "booking_time": "10:30:00",
      "status": "pending",
      "address": "123 Green Valley, Satellite",
      "city": "Ahmedabad",
      "pincode": "380015",
      "phone": "+919876543210",
      "notes": "Please bring extra sanitization sprays.",
      "total_amount": 2499.00,
      "created_at": "2026-06-11T12:10:00Z",
      "updated_at": "2026-06-11T12:10:00Z",
      "services": {
        "name": "Home Deep Cleaning",
        "price": 2499.00,
        "duration_minutes": 180
      }
    }
  }
}
```

### 2. Get My Bookings (Customer)
* **Endpoint:** `GET /api/bookings/my`
* **Headers:** `Authorization: Bearer <jwt_token>`
* **Query Parameters:**
  * `status` (optional) - Filter by `pending`, `confirmed`, `completed`, `cancelled`
  * `page` (optional, default: 1)
  * `limit` (optional, default: 10)
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "bookings": [
      {
        "id": "b123-xyz-...",
        "booking_date": "2026-06-15",
        "booking_time": "10:30:00",
        "status": "pending",
        "total_amount": 2499.00,
        "services": {
          "name": "Home Deep Cleaning",
          "price": 2499.00,
          "duration_minutes": 180,
          "category": "residential"
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    }
  }
}
```

### 3. Cancel Booking
* **Endpoint:** `PUT /api/bookings/:id/cancel`
* **Headers:** `Authorization: Bearer <jwt_token>`
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Booking cancelled successfully.",
  "data": {
    "booking": {
      "id": "b123-xyz-...",
      "status": "cancelled",
      "services": {
        "name": "Home Deep Cleaning",
        "price": 2499.00
      }
    }
  }
}
```

---

## ⚙️ Admin API (Requires Admin Role)

### 1. Dashboard Stats
* **Endpoint:** `GET /api/admin/dashboard`
* **Headers:** `Authorization: Bearer <jwt_token>` (Admin)
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalBookings": 150,
      "pendingBookings": 12,
      "completedBookings": 128,
      "totalCustomers": 94,
      "totalRevenue": 345000.00,
      "unreadMessages": 4
    },
    "recentBookings": [...]
  }
}
```

### 2. Update Booking Status
* **Endpoint:** `PUT /api/admin/bookings/:id/status`
* **Headers:** `Authorization: Bearer <jwt_token>` (Admin)
* **Request Body:**
```json
{
  "status": "confirmed"
}
```
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Booking status updated to \"confirmed\".",
  "data": {
    "booking": {
      "id": "b123-xyz-...",
      "status": "confirmed",
      "users": {
        "name": "Jane Doe",
        "email": "jane@example.com"
      },
      "services": {
        "name": "Home Deep Cleaning",
        "price": 2499.00
      }
    }
  }
}
```

### 3. Get Contact Messages
* **Endpoint:** `GET /api/admin/messages`
* **Headers:** `Authorization: Bearer <jwt_token>` (Admin)
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "m123-...",
        "name": "Arjun Patel",
        "email": "arjun@example.com",
        "phone": "+919998887776",
        "message": "I need a quote for cleaning a 3-story bungalow.",
        "is_read": false,
        "created_at": "2026-06-11T14:00:00Z"
      }
    ]
  }
}
```

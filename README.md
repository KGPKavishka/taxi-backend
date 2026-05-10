# Taxi Booking Backend API

A scalable and professional backend API for a Taxi Booking System built using NestJS, PostgreSQL, Prisma ORM, and Swagger OpenAPI documentation.

---

## 🚀 Technologies Used

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger OpenAPI
- JWT Authentication
- Class Validator
- REST API Architecture

---

## 📌 Project Overview

This project is a backend system for a Taxi Booking Application.

The system is developed using NestJS with a modular architecture and PostgreSQL as the database. Prisma ORM is used for database management and Swagger is integrated for API documentation.

This backend is designed for scalability, maintainability, and professional production-level development practices.

---

## ✨ Features

### User Management
- Create Users
- Get All Users
- Get User By ID
- Update Users
- Delete Users

### Authentication
- JWT Authentication
- Password Hashing
- Protected Routes

### Database
- PostgreSQL Integration
- Prisma ORM
- Database Migration Support

### API Documentation
- Swagger OpenAPI Integration
- API Testing Interface

### Validation
- DTO Validation
- Request Validation using class-validator

---

# 📂 Project Structure

```
src/
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── users/
│   ├── dto/
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── auth/
│
├── app.module.ts
└── main.ts
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

## 2️⃣ Navigate Into Project

```bash
cd YOUR_REPOSITORY
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/taxi_app"
JWT_SECRET="your_secret_key"
PORT=3000
```

---

# 🗄️ Prisma Setup

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Database Migration

```bash
npx prisma migrate dev --name init
```

---

# ▶️ Running the Application

## Development Mode

```bash
npm run start:dev
```

## Production Mode

```bash
npm run start:prod
```

---

# 📘 Swagger API Documentation

After starting the server, open:

```bash
http://localhost:3000/api
```

Swagger provides:
- API endpoint documentation
- Request/response testing
- DTO visualization

---

# 🧪 Example API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Create User |
| GET | /users | Get All Users |
| GET | /users/:id | Get User By ID |
| PATCH | /users/:id | Update User |
| DELETE | /users/:id | Delete User |

---

# 🛠️ Commands

| Command | Description |
|---------|-------------|
| npm run start:dev | Start development server |
| npm run build | Build project |
| npm run start:prod | Run production build |
| npx prisma studio | Open Prisma Studio |
| npx prisma migrate dev | Run migrations |

---

# 📈 Future Improvements

- Driver Module
- Ride Booking Module
- Real-time Ride Tracking
- Payment Gateway Integration
- Admin Dashboard
- Notifications System

---

# 👨‍💻 Author

Pasindu Kavishka

Software Developer

---

# 📄 License

This project is developed for educational and portfolio purposes.
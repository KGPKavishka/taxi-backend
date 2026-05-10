# Taxi Booking Backend API

A scalable and modular backend API for a Taxi Booking System built using NestJS, PostgreSQL, Prisma ORM, and Swagger OpenAPI documentation.

---

# 🚀 Technologies Used

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger OpenAPI
- Class Validator
- REST API Architecture

---

# 📌 Project Overview

This project is a backend system developed for a Taxi Booking Application.

The backend is built using NestJS with a modular architecture and PostgreSQL as the database system. Prisma ORM is used for database management and Swagger is integrated for API documentation and testing.

The project is designed using clean and maintainable backend development practices.

---

# ✨ Features

## User Management
- Create Users
- Get All Users
- Get User By ID
- Update Users
- Delete Users

## Ride Management
- Create Ride
- Get All Rides
- Update Ride
- Delete Ride

## Database Integration
- PostgreSQL Database
- Prisma ORM
- Prisma Migrations

## API Documentation
- Swagger OpenAPI Integration
- API Testing Interface

## Validation
- DTO Validation
- Request Validation using class-validator

---

# 📂 Project Structure

```bash
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
├── rides/
│   ├── dto/
│   ├── rides.controller.ts
│   ├── rides.service.ts
│   └── rides.module.ts
│
├── app.module.ts
└── main.ts
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

## Navigate Into Project

```bash
cd YOUR_REPOSITORY
```

## Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

Example:

```env
DATABASE_URL="your_database_url"
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
- API testing interface
- Request and response visualization

---

# 🧪 Example API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Create User |
| GET | /users | Get All Users |
| GET | /users/:id | Get User By ID |
| PATCH | /users/:id | Update User |
| DELETE | /users/:id | Delete User |
| POST | /rides | Create Ride |
| GET | /rides | Get All Rides |

---

# 🛠️ Useful Commands

| Command | Description |
|---------|-------------|
| npm run start:dev | Start development server |
| npm run build | Build application |
| npm run start:prod | Run production build |
| npx prisma studio | Open Prisma Studio |
| npx prisma migrate dev | Run database migrations |

---

# 📈 Future Improvements

- Authentication System
- Driver Module
- Ride Booking Module
- Real-time Ride Tracking
- Payment Integration
- Admin Dashboard

---

# 👨‍💻 Author

Pasindu Kavishka

Software Developer

---

# 📄 License

This project is developed for educational and portfolio purposes.
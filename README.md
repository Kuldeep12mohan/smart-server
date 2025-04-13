
# Smart Waste Management Portal - Backend

This is the backend API for the Smart Waste Management Portal, built with Node.js, Express, and Prisma ORM with PostgreSQL.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database

### Setup

1. Clone the repository
2. Install dependencies:

```bash
cd server
npm install
```

3. Copy the `.env.example` file to create a `.env` file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your PostgreSQL database connection string and other configuration values

5. Generate Prisma client:

```bash
npx prisma generate
```

6. Run migrations to create database tables:

```bash
npx prisma migrate dev
```

7. Seed the database with initial data:

```bash
npm run seed
```

8. Start the development server:

```bash
npm run dev
```

The server will be running at http://localhost:5000.

## Available Scripts

- `npm run dev`: Start the development server with auto-reloading
- `npm start`: Start the production server
- `npm run prisma:generate`: Generate Prisma client
- `npm run prisma:migrate`: Run database migrations
- `npm run seed`: Seed the database with sample data

## API Routes

### Authentication
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login with email and password
- `GET /api/auth/me`: Get the current user profile

### Pickup Requests
- `POST /api/pickup`: Create a new pickup request
- `GET /api/pickup/me`: Get the current user's pickup requests
- `GET /api/pickup`: (Admin/Staff) Get all pickup requests
- `PATCH /api/pickup/:id/status`: (Admin/Staff) Update pickup request status

### Recycling Centers
- `GET /api/recycling/centers`: Get all recycling centers
- `GET /api/recycling/waste-guide`: Get AI waste segregation suggestions

### Bin Status
- `GET /api/bins`: (Admin/Staff) Get all bin statuses
- `POST /api/bins/update`: (Admin/Staff) Update bin status
- `POST /api/bins/simulate-update`: (Admin) Simulate random bin updates

### Collection Schedules
- `GET /api/schedules`: Get all active collection schedules
- `POST /api/schedules`: (Admin/Staff) Create a new schedule
- `PUT /api/schedules/:id`: (Admin/Staff) Update a schedule
- `DELETE /api/schedules/:id`: (Admin/Staff) Delete a schedule

### User Management
- `GET /api/users`: (Admin) Get all users
- `PATCH /api/users/:id/role`: (Admin) Update user role
- `PATCH /api/users/:id/points`: (Admin) Adjust user points

## Database Models

The database schema includes the following models:
- User
- PickupRequest
- RecyclingCenter
- BinStatus
- CollectionSchedule

# Team Task Manager

A full‑stack web application for managing projects, tasks, and teams with **role‑based access control** (Admin / Member).  
Built for the Ethara Company selection process.

##  Live Demo
- **URL**: [https://your-app.up.railway.app](https://your-app.up.railway.app)  
- **Demo Video**: [Link to your 2–5 min video]

##  Features
- **Authentication** – Signup / Login with role selection  
-  **Project & Team Management** – Create projects, add/remove members  
-  **Task Management** – Create tasks, assign to members, track status (TODO → IN_PROGRESS → DONE)  
-  **Dashboard** – Overview of total, todo, in‑progress, done, and overdue tasks  
-  **Role‑Based Access**  
  - **Admin** – Full control (create projects, manage members, create/update/delete tasks)  
  - **Member** – View assigned tasks, update status of own tasks  
-  **Secure** – Zod validation, bcrypt password hashing, middleware role enforcement

##  Tech Stack
- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS  
- **Backend**: Next.js API Routes (REST)  
- **Database**: PostgreSQL + Prisma ORM  
- **Auth**: NextAuth.js (Credentials Provider, JWT)  
- **Validation**: Zod  
- **Deployment**: Railway

##  Getting Started (Locally)

### Prerequisites
- Node.js 18+
- PostgreSQL database (local or cloud)

### Installation
1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/team-task-manager.git
   cd team-task-manager
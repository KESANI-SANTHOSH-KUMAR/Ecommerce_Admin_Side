# 🛒 E-Commerce Admin Panel (Node.js + Express + React)

This project is a full-stack **E-Commerce Admin Panel** built using modern web technologies.  
It allows administrators to securely manage products, images, and inventory through a clean and responsive dashboard.

---

## ✨ Features

### 👤 Admin Authentication
- Admin Register & Login
- Secure password hashing using **bcrypt**
- **JWT-based authentication**
- Protected admin routes

---

### 📦 Product Management
- Add, Edit, Delete, and View products
- Upload product images
- Dynamically serve product images
- Image preview support

---

### 📡 Backend APIs (Node.js + Express)
- RESTful APIs using Express.js
- MySQL database integration
- JWT authentication middleware
- CORS enabled for frontend communication
- Images stored in `/uploads` directory
- Static image access via `/uploads/:filename`

---

### 💻 Frontend (React + Vite)
- Admin login and dashboard UI
- Product management forms with validation
- Axios for API communication
- Image previews
- Toast notifications
- Clean and responsive UI

---

### 🔐 JWT Authentication Flow
- Login API returns JWT token
- Token stored in `localStorage`
- Token sent in `Authorization` header for secured routes

---

## ⚙️ Tech Stack

| Layer       | Technology |
|------------|-----------|
| Frontend   | React + Vite + Axios + CSS |
| Backend    | Node.js + Express.js |
| Database   | MySQL |
| Auth       | JWT, bcrypt |
| File Upload| Multer |
| Tools      | VS Code, Postman, Git |

---

## 📁 Folder Structure
```bash
ecom/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── uploads/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── package.json
│
└── README.md
```

---

## 🚀 Installation & Setup

### 1️⃣ Create Project Folder
```bash
mkdir ecom
cd ecom
mkdir backend
cd backend
npm install
```
---
# Create .env file:
```bash
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecommerce_db
JWT_SECRET=your_secret_key
```
---
# Run backend server:
```bash
node server.js
Backend runs on:
http://localhost:5000
```
---
## Frontend Setup:
```bash
mkdir frontend
cd ../frontend
npm install
npm run dev
Frontend runs on: 
http://localhost:5173
```
---
### 🧪 Usage

- Open frontend in browser

- Register as admin

- Login using credentials

- Access admin dashboard

- Add / edit / delete products

- Upload product images and manage inventory
---
### 🛡 Security

- JWT-based authentication

- Password hashing with bcrypt

- Protected routes using middleware

- CORS configuration for frontend-backend communication
---
### 🔮 Future Enhancements

- Order management

- Category management

- Admin roles & permissions

- Cloud image storage (AWS S3 / Cloudinary)

- Docker & deployment
---
### 👨‍💻 Developed By

- KESANI SANTHOSH KUMAR
GitHub: https://github.com/KESANI-SANTHOSH-KUMAR

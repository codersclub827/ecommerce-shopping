# 🎯 Full Stack E-comerce Website Using MERN

This is a complete **Full Stack E-commerce Web Application** built using the MERN stack (MongoDB, Express.js, React, Node.js) with secure Stripe payment integration. It includes all the core features of a modern e-commerce platform such as product listing, shopping cart, user authentication, order management, and payment processing. Whether you're learning MERN or building a real-world e-commerce solution, this project provides a solid foundation for scalable and production-ready applications.





### 📥 Step 1: Clone the Project

```bash
git clone https://github.com/codersclub827/forever-shopping.git
cd forever-shopping
```

### 📦 Step 2: Setup Backend

```bash
cd backend
npm install
```




Run the backend server:

```bash
npm run dev
```

Now Backend will run on like http://localhost:5000

### 💻 Step 3: Setup Frontend

```bash
cd frontend
npm install
```



Now Frontend will run on like http://localhost:3000

### ☁️ Step 4: MongoDB Atlas Setup (Free Cloud DB)

1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Create a Free Shared Cluster
3. Create a DB user (e.g., e-commerce)
4. Whitelist IP Address → Allow Access from Anywhere (0.0.0.0/0)
5. Click Connect → Connect your application
6. Copy your Mongo URI Like 
7. Paste it into your .env file as MONGO_URI

### 🔐 Step 5: Admin Setup


Option 2: Promote Your Own Account

1. Register a new user on the frontend

2. Go to MongoDB Atlas → Cluster → Collections → users

3. Find your user and update the role like:

   ```json
   {
     "role": "admin"
   }
   ```

4. Save and re-login — you now have admin access

**🎯 Done! Your full-stack e-commerce site is now running locally 🚀**

## 🧱 Project Structure

```bash
forever-shopping/
│
├── backend/                  # Express backend + Mongoose schemas
│   ├── controllers/          # Request handlers
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   └── .env                  # Environment config
│
├── frontend/                 # React frontend
│   ├── components/           # Reusable UI components
│   ├── pages/                # User-facing pages
│   ├── context/              # Auth & state management
│   └── App.js                # Main app file
│
├── admin/                    # Admin dashboard
│   ├── components/           # Admin UI components (e.g., Sidebar, Navbar)
│   ├── pages/                # Admin pages (UserList, ProductList, Orders)
│   ├── services/             # API calls related to admin
│   ├── utils/                # Helper functions
│   └── App.js                # Admin app entry point
│
└── README.md                 # Project guide
```

## 🔗 Live link

[Click here](https://forever-frontend-gamma-eight.vercel.app/)


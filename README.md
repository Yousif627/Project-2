# 🎮 Game Coaching Platform

![Game Coach Banner](https://media.istockphoto.com/id/1310146070/photo/during-a-computer-games-tournament-a-young-guy-is-nervous-the-coach-tells-him-the-tactics-of.jpg?s=612x612&w=0&k=20&c=rHlsZflHD7Uhi8U0hFToPw5w8C0Cz3_UyS4y9f_2mP0=)

Welcome to **Game Coach** — a full-stack web application where users can become **coaches** or find coaches for their favorite games. Whether it's Valorant, League of Legends, Fortnite, or Minecraft — this platform helps connect experienced players with those seeking to improve their gameplay.

---

## 🌐 Live Preview

*(Optional: Add link to your deployed app here, e.g., Render, Vercel, Netlify)*

---

## 🧩 Features

- 👥 User Registration & Login
- 🎮 Game Library with 200+ Games
- 🧑‍🏫 Coach Dashboard (Add/Edit/Delete Services)
- 📄 View Services by Game
- ✍️ Embedded Service Notes (Mongoose subdocuments)
- 🧭 Navigation with Auth-Based Views
- 💼 Multiple Services per Coach
- 📸 Image-Based Game Cards
- 🔐 Session-Based Auth System

---

## 📁 Folder Structure

project-root/
│
├── config/
│ └── db.js
|
├── node_modules
│ 
│
├── routes/
│ ├── auth.routes.js
│ ├── coach.routes.js
│ ├── service.routes.js
│ └── home.routes.js
│
├── views/
│ ├── auth
│ ├── coach 
│ ├── home 
│ ├── service
│ └── partials 
│
├── models/
│ ├── User.js
│ └── Service.js
│
├── middleware/
│ ├── isSignedIn.js
│ └── passUserToView.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── README.md # You're reading it now!


---

## 🛠️ Tech Stack

| Layer         | Technology                |
|---------------|---------------------------|
| Frontend      | HTML, CSS, Bootstrap, EJS |
| Backend       | Node.js, Express          |
| Database      | MongoDB (Mongoose)        |
| Auth          | Express Session, bcrypt   |
| Templating    | EJS                       |
| Hosting       | *(Optional: Render, etc.)*|

---

## ⚙️ Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/game-coach.git
   cd game-coach

2. Install Dependencies<br>

npm install

3. Configure Environment<br>

 Create a .env file:
MONGO_URL=mongodb+srv://your-uri
SESSION_SECRET=your-secret
PORT=3000

4. Run the App
Run the App

5. Open http://localhost:3000 in your browser

🖼 UI Preview<br>

.Games are shown in card layout with hover effects and responsive design.


👥 Credits<br>

.Israa – 75% of the work

.Omar – 20%

.George – 5%

.Contact – +973 38776650

💡 Future Features
.Ratings & Reviews 

.Schedule Booking System 

.Coach Messaging 

.Admin Dashboard 

.Coach Badges / Achievements 

.Video Uploads (Game Clips) 

📄 License
.This project is for learning and educational use.
Feel free to fork or contribute with attribution.
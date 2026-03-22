# Talent-IQ 🧠

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Powered-blue)
![Realtime](https://img.shields.io/badge/Realtime-Socket.io-orange)
![Status](https://img.shields.io/badge/Status-Live-success)

**Talent-IQ** is an **AI-powered coding interview preparation platform** that lets developers practice coding problems, run code online, and conduct live interview sessions with real-time video, chat, and a shared code editor.

🌐 **Live Demo:**
https://talent-iq-t3ck.onrender.com/

---

## ✨ Features

* 📹 **Live video calls** inside interview sessions
* 💬 **Real-time chat** between interviewer and candidate
* 💻 **Shared code editor** — both users see and edit the same code live
* ⚡ **Run code instantly** in Python, JavaScript, Java and C++
* 🤖 **AI coding assistant** for guidance during practice
* 🔐 **Secure authentication** with Clerk
* 📊 **Session tracking** for practice history
* 🧠 **Curated problem set** with Easy, Medium and Hard levels

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* DaisyUI
* Axios
* Clerk (Auth UI)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Clerk
* Stream SDK (Video + Chat)
* Socket.io
* Inngest
* Piston API

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Talent-IQ.git
cd Talent-IQ
```

---

### Backend setup

```bash
cd backend
npm install
```

Create `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection
CLERK_SECRET_KEY=your_clerk_key
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
```

Run backend

```bash
npm run dev
```

---

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| POST   | /api/sessions         | Create interview session  |
| GET    | /api/sessions/active  | Get all active sessions   |
| GET    | /api/sessions/recent  | Get my recent sessions    |
| POST   | /api/sessions/:id/join | Join a session           |
| POST   | /api/sessions/:id/end  | End a session            |
| POST   | /api/code/run         | Execute code              |
| GET    | /api/chat/token       | Get Stream chat token     |

---

## 🚀 Future Improvements

* AI feedback on submitted solutions
* Coding leaderboard
* Mock interview scheduling
* Interview recording and playback
* Problem difficulty rating by users

---

## 👨‍💻 Project Contribution

### 🔹 Vinay Pandey

**Frontend**
- Home landing page
- Dashboard page — shows active and recent sessions
- Problems list page with difficulty levels
- Resume builder page
- Navbar component
- Protected routes — only logged in users can access pages
- UI design and styling across the whole app

**Backend**
- Database models — User and Session
- MongoDB connection and environment variable setup
- Server setup and all API routes registered

---

### 🔹 Vicky Sahani

**Backend**
- Video calling inside interview sessions
- Live chat between both users during a session
- Creating a new interview session
- Joining an existing session as participant
- Ending a session and cleaning everything up
- Auto-saving new users to database on signup
- Running code in Python, JavaScript, Java and C++
- Real-time code sync so both users see same code

**Frontend**
- Active sessions list on dashboard
- Live code editor panel inside session
- Problem description with examples and constraints

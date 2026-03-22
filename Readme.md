# Talent-iQ 🧠

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Powered-blue)
![Status](https://img.shields.io/badge/Status-Live-success)


**Talent-iQ** is an **AI-powered coding interview preparation platform** that helps developers practice coding problems, execute code online, and interact with an AI assistant for guidance.

🌐 **Live Demo:**
https://talent-iq-t3ck.onrender.com/

---

## ✨ Features

* 🤖 **AI Coding Assistant** for solving problems
* 💻 **Online Code Editor** with real-time execution
* ⚡ **Run code instantly** using Piston API
* 🧠 **Interview practice environment**
* 🔐 Secure authentication with JWT
* 📊 Session tracking for practice history
* 🌐 Multi-language coding support

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Inngest
* Piston API

---



## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Talent-iQ.git
cd Talent-iQ
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
JWT_SECRET=your_secret_key
PISTON_API_URL=https://emkc.org/api/v2/piston
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

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | /api/auth/signup | Register user            |
| POST   | /api/auth/login  | Login user               |
| POST   | /api/code/run    | Execute code             |
| POST   | /api/ai/chat     | AI assistant             |
| POST   | /api/session     | Create interview session |

---

## 🚀 Future Improvements

* Live mock interviews
* AI feedback on solutions
* Coding leaderboard
* Problem difficulty levels
* Video interview integration

---

## 👨‍💻 Project Contribution

### 🔹 Vinay Pandey
- Frontend (React + Tailwind UI)
- API integration
- JWT Authentication (Login/Signup) – implemented collaboratively

### 🔹 Vicky Sahani
- Real-time communication using Socket.io
  - Socket setup and connection handling
  - Message emit/listen system
  - Online/offline user tracking
- Contributed to JWT authentication and backend logic

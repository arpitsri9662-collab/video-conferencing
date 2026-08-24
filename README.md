# 🎥 Video Conferencing Web Application

<p align="center">
  <strong>A full-stack real-time video conferencing application built with React, Node.js, Express, Socket.IO, WebRTC, and MongoDB.</strong>
</p>

<p align="center">
  <a href="https://video-conferencing-frontend-seven.vercel.app/">🌐 Live Demo</a>
</p>

---

## 📌 Overview

This project is a full-stack **real-time video conferencing web application** inspired by platforms such as Zoom and Google Meet.

The application combines a React frontend with a Node.js/Express backend, MongoDB for persistent user data, Socket.IO for real-time signaling, and WebRTC for peer-to-peer audio/video communication.

The project was built to understand and implement:

* Real-time communication
* WebRTC-based video/audio calling
* Socket.IO signaling
* User authentication
* REST API integration
* MongoDB database integration
* React routing and UI development
* Full-stack deployment

---

## 🚀 Live Application

### 🌐 Frontend

**Live Demo:**
https://video-conferencing-frontend-seven.vercel.app/

### ⚙️ Backend

**Backend API:**
https://video-conferencing-backend-n69p.onrender.com

### 🗄️ Database

MongoDB Atlas is used as the production database.

---

# ✨ Features

* 🔐 **User Authentication**

  * User registration
  * User login
  * Password hashing with bcrypt
  * Authentication token handling

* 🎥 **Real-Time Video Calling**

  * Camera access
  * Microphone access
  * Peer-to-peer video communication
  * WebRTC-based media streaming

* 🔊 **Audio Communication**

  * Real-time microphone streaming
  * Browser-based media permissions

* 📡 **Real-Time Signaling**

  * Socket.IO connection
  * Signaling between users
  * Call/connection coordination

* 🖥️ **Screen Sharing**

  * Browser screen-sharing support through the WebRTC MediaStream APIs

* 💬 **Real-Time Communication**

  * Socket-based communication during meetings

* 📱 **Responsive Interface**

  * React-based component architecture
  * Material UI components
  * Responsive user interface

* 🌐 **Production Deployment**

  * Frontend deployed on Vercel
  * Backend deployed on Render
  * MongoDB hosted on MongoDB Atlas

---

# 🛠️ Tech Stack

## Frontend

| Technology            | Purpose                   |
| --------------------- | ------------------------- |
| **React.js 18**       | Frontend UI development   |
| **React Router DOM**  | Client-side routing       |
| **Material UI (MUI)** | UI components and styling |
| **Axios**             | HTTP/API requests         |
| **Socket.IO Client**  | Real-time communication   |
| **WebRTC APIs**       | Peer-to-peer audio/video  |
| **JavaScript (ES6+)** | Application logic         |
| **CSS**               | Styling                   |
| **Create React App**  | Frontend build tooling    |

## Backend

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| **Node.js**       | JavaScript runtime              |
| **Express.js**    | REST API and server framework   |
| **Socket.IO**     | Real-time signaling             |
| **Mongoose**      | MongoDB object modeling         |
| **MongoDB Atlas** | Production database             |
| **bcrypt**        | Password hashing                |
| **dotenv**        | Environment variable management |
| **CORS**          | Cross-origin communication      |

## Deployment

| Service           | Purpose                |
| ----------------- | ---------------------- |
| **Vercel**        | Frontend deployment    |
| **Render**        | Backend deployment     |
| **MongoDB Atlas** | Cloud database         |
| **GitHub**        | Source code management |

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │      User Browser    │
                         │                      │
                         │   React Frontend     │
                         │   Vercel Deployment  │
                         └──────────┬───────────┘
                                    │
                         HTTPS / REST API
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Node.js + Express  │
                         │                      │
                         │   Render Backend     │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐            ┌──────────────────┐
          │    MongoDB Atlas │            │    Socket.IO     │
          │                  │            │                  │
          │ User Data        │            │ Real-time        │
          │ Authentication   │            │ Signaling        │
          └──────────────────┘            └────────┬─────────┘
                                                   │
                                                   │ SDP / ICE
                                                   ▼
                                      ┌────────────────────────┐
                                      │       WebRTC Layer      │
                                      │                        │
                                      │ Peer-to-Peer Media     │
                                      └───────────┬────────────┘
                                                  │
                                   Audio / Video Streams
                                                  │
                         ┌────────────────────────┴───────────────┐
                         │                                        │
                         ▼                                        ▼
                  ┌──────────────┐                         ┌──────────────┐
                  │    User A    │ ◄────── P2P ─────────► │    User B    │
                  │ Camera/Mic   │                         │ Camera/Mic   │
                  └──────────────┘                         └──────────────┘
```

---

# 🔄 How the Application Works

## 1. User Opens the Application

The user accesses the React application hosted on Vercel.

```text
Browser
   ↓
Vercel
   ↓
React Application
```

React handles the UI, routing, authentication screens, meeting interface, and video-call components.

---

## 2. User Authentication

The frontend communicates with the Express backend through REST APIs.

```text
React
  │
  │ HTTP Request
  ▼
Express API
  │
  │ Mongoose
  ▼
MongoDB Atlas
```

During registration:

```text
User enters details
        ↓
React sends request
        ↓
Express receives request
        ↓
Password is hashed using bcrypt
        ↓
User stored in MongoDB
```

During login:

```text
Login Form
    ↓
Axios Request
    ↓
Express API
    ↓
MongoDB
    ↓
Authentication Result
    ↓
React Application
```

---

# 🎥 WebRTC Video Call Flow

WebRTC is responsible for the actual peer-to-peer audio/video communication.

Socket.IO is used as the **signaling layer** to help users establish the WebRTC connection.

### Simplified flow

```text
              USER A                         SERVER                         USER B

                 │                              │                              │
                 │──── Connect Socket.IO ──────►│◄──── Connect Socket.IO ─────│
                 │                              │                              │
                 │──── Call / Join Request ────►│                              │
                 │                              │──── Notify User B ──────────►│
                 │                              │                              │
                 │──────── SDP Offer ──────────►│──────── SDP Offer ──────────►│
                 │                              │                              │
                 │◄────── SDP Answer ───────────│◄──────── SDP Answer ─────────│
                 │                              │                              │
                 │──────── ICE Candidates ─────►│────── ICE Candidates ──────►│
                 │                              │                              │
                 │══════════ WebRTC P2P Audio / Video Connection ════════════│
                 │                              │                              │
                 │◄══════════════ Audio + Video Stream ═════════════════════►│
```

### Important distinction

**Socket.IO does not carry the actual video stream.**

It is primarily used for real-time signaling/coordination.

The media communication is handled by the browser's **WebRTC APIs**.

---

# 🔌 Socket.IO Communication

Socket.IO provides persistent real-time communication between the frontend and backend.

It is useful for:

* Connection management
* User presence
* Call signaling
* Meeting coordination
* Real-time events
* Communication between connected clients

The architecture follows:

```text
React Client
     │
     │ Socket.IO
     ▼
Node.js Server
     │
     │ Socket Events
     ▼
Other Connected Clients
```

---

# 🌐 REST API Flow

The application also uses standard HTTP APIs for backend operations.

```text
React
  │
  │ Axios
  ▼
Express
  │
  ├── Authentication
  ├── User Operations
  └── Other API Requests
  │
  ▼
MongoDB
```

The user-related API is organized under:

```text
/api/v1/users
```

---

# 📂 Project Structure

```text
video-conferencing/
│
├── backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   └── socketManager.js
│   │   │
│   │   ├── routes/
│   │   │   └── users.routes.js
│   │   │
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env                 # Local only - not committed
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── utils/
│   │   └── ...
│   │
│   ├── package.json
│   └── .gitignore
│
├── .gitignore
└── README.md
```

---

# ⚙️ Local Installation

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB / MongoDB Atlas
* Git
* A modern browser with WebRTC support

---

## 1. Clone the Repository

```bash
git clone https://github.com/arpitsri9662-collab/video-conferencing.git

cd video-conferencing
```

---

# 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

Then start the backend:

```bash
npm run dev
```

The backend will run locally on:

```text
http://localhost:8000
```

---

# 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will normally run on:

```text
http://localhost:3000
```

---

# 🔧 Production Configuration

The frontend uses a centralized server configuration to switch between local development and production.

Production backend:

```text
https://video-conferencing-backend-n69p.onrender.com
```

Development backend:

```text
http://localhost:8000
```

Before deploying, make sure the frontend is configured to use the production backend.

---

# 🚀 Deployment Architecture

The application is deployed using separate services from the same GitHub repository.

```text
                     GitHub Repository
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
         frontend/                     backend/
              │                           │
              ▼                           ▼
           Vercel                      Render
              │                           │
              │                           │
              └───────────┬───────────────┘
                          │
                          ▼
                    MongoDB Atlas
```

### Frontend

```text
Platform: Vercel
Directory: frontend
Build: npm run build
```

### Backend

```text
Platform: Render
Directory: backend
Build: npm install
Start: npm start
```

### Database

```text
MongoDB Atlas
```

---

# 🔐 Environment Variables

Environment variables are used to keep sensitive configuration outside the source code.

### Backend

```env
MONGO_URI=your_mongodb_connection_string
```

Never commit your `.env` file.

The repository `.gitignore` prevents environment files from being uploaded.

---

# 🔒 Security Considerations

The project follows several basic security practices:

* Passwords are hashed using bcrypt.
* Database credentials are stored in environment variables.
* `.env` files are excluded from Git.
* HTTPS is used for production frontend/backend communication.
* CORS is configured on the backend.
* WebRTC media is handled by the browser's secure media APIs.

### Production improvements

For a larger production system, additional security measures could include:

* JWT-based authentication
* Refresh tokens
* Rate limiting
* Stronger CORS restrictions
* Input validation
* API authentication middleware
* Secure HTTP headers
* More granular authorization
* TURN server configuration for difficult network environments

---

# 🧪 Testing the Application

To test the complete application:

### Authentication

```text
1. Open the live application
2. Create an account
3. Login
4. Verify authentication
```

### Video Calling

```text
1. Open the application in Browser A
2. Login
3. Create/join a meeting
4. Open the application in Browser B
5. Login with another account
6. Join the same meeting
7. Allow camera and microphone permissions
8. Verify audio/video communication
```

For WebRTC testing, using two separate browser windows or devices is recommended.

---

# 🐛 Common Issues

## Camera or microphone doesn't work

Check:

* Browser camera permissions
* Browser microphone permissions
* Camera/microphone availability
* HTTPS connection
* Browser console errors

---

## Backend cannot connect

Check:

```text
MongoDB Atlas
     ↓
MONGO_URI
     ↓
Render Environment Variables
```

Make sure the MongoDB connection string is valid and the database allows connections from the deployed backend.

---

## Video call doesn't connect

Check:

```text
Frontend
   ↓
Socket.IO
   ↓
Render Backend
   ↓
Signaling
   ↓
WebRTC
```

Also verify:

* Socket.IO client URL
* Backend CORS configuration
* Browser permissions
* Network/firewall restrictions
* WebRTC connection errors

---

# 📈 Future Improvements

Possible improvements for future versions:

* 🔐 JWT authentication
* 👥 Group video conferencing
* 💬 Persistent meeting chat
* 🖥️ Advanced screen sharing
* 🎙️ Host controls
* 🔇 Participant mute controls
* 📹 Meeting recording
* 📅 Meeting scheduling
* 🧑‍🤝‍🧑 Participant management
* 🔗 Shareable meeting links
* 🔔 Meeting notifications
* 🌐 TURN server support
* 📊 Connection quality indicators
* 📝 Meeting history
* 📱 Improved mobile experience

---

# 💡 Key Learning Outcomes

This project helped demonstrate practical experience with:

### Frontend Development

* React component architecture
* React Router
* Material UI
* API integration with Axios
* Browser Media APIs
* Client-side state management

### Backend Development

* REST API development
* Express.js
* Node.js
* MongoDB/Mongoose
* Authentication
* Password hashing
* Environment configuration

### Real-Time Systems

* Socket.IO
* WebSocket-based communication
* WebRTC signaling
* Peer-to-peer media communication
* Camera/microphone APIs

### Deployment

* Git/GitHub
* Vercel
* Render
* MongoDB Atlas
* Production environment configuration
* Frontend/backend service separation

---

# 👨‍💻 Author

**Arpit Srivastava**

B.Tech — Computer Science & Engineering

### Connect

* GitHub: `arpitsri9662-collab`

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using React, Node.js, Express, Socket.IO, WebRTC, and MongoDB.
</p>

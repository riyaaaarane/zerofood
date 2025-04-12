#  ZeroFood

ZeroFood is a simple web app that connects people who have leftover food (like restaurants, event organizers, or individuals) with those who need it (like NGOs or hungry individuals). Think of it like a mini platform to reduce food waste and help people in need — all built with the MERN stack (MongoDB, Express, React, Node.js).

---

##  What You Can Do

- 👥 Sign up and log in as a user
- 🙌 Donors can share leftover food by creating a listing
- 📦 Receivers can browse available food and pick it up
- ⏳ Listings include info like food type, quantity, location, and how long it's good for

---

##  Tech Stack

- **Frontend:** React + Axios + CSS
- **Backend:** Node.js + Express + MongoDB + Mongoose
- **Auth:** Basic JWT-based system (already working, so no changes needed 😉)

---

##  Folder Structure

zerofood/ ├── backend/ │ ├── models/ # Mongoose models for User and FoodListing │ ├── routes/ # Auth and food-related routes │ └── index.js # Main server file │ ├── frontend/ │ ├── components/ │ │ ├── Donate.js # Form to create a new food listing │ │ └── Receive.js # Page to view all listings │ ├── AppStyle.css # Styling │ └── ..


---

##  Getting Started

### 1. Clone the Project

git clone https://github.com/riyaaaarane/zerofood.git
cd zerofood

### 2. Start the Backend
Make sure MongoDB is running locally (default is mongodb://localhost:27017).

cd backend
npm install
node index.js
Backend will be live at http://localhost:5000

### 3. Start the Frontend
cd frontend
npm install
npm start

Frontend will run at http://localhost:3000

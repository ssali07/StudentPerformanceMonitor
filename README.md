# 🎓 Campus Placement Prediction App

A web-based application that predicts the probability of a student getting placed during campus recruitment. Powered by a machine learning model hosted on a Flask RESTful API backend, and presented through a clean and modern frontend built with React and TailwindCSS.

---

## 🚀 Features

- 📥 **Input Fields**:
  - Age
  - Gender (Male/Female)
  - Branch of Study (CSE, ECE, IT, Mechanical, Electrical, Civil)
  - Internship Experience
  - CGPA
  - Hostel Status
  - History of Backlogs

- 📈 **Output**:
  - Displays the **predicted probability** of placement.
  - Intuitive interface for easy interaction.
  - Responsive design powered by TailwindCSS.
  - Smooth communication between frontend and backend via REST API.

---

## 🛠️ Tech Stack

| Layer        | Technology                           |
|--------------|---------------------------------------|
| **Frontend** | React.js, Vite, TailwindCSS           |
| **Backend**  | Python, Flask (RESTful API)           |
| **ML Model** | XGBoost                               |
| **Libraries**| NumPy, Pandas, Flask-CORS, joblib     |

---

## 📦 Getting Started

### 🔁 Backend (Flask API)

1. **Navigate to backend folder**  
```bash
cd backend

```
2. Create and activate a virtual environment
```bash
python -m venv venv
source venv/bin/activate       # macOS/Linux
venv\Scripts\activate          # Windows
```
3. Install required packages
```bash
pip install -r requirements.txt
```
4. Run the backend
```bash
python run.py
```
The Flask server will start at http://localhost:5000

🌐 Frontend (React + Vite)
1. Navigate to frontend folder

```bash
cd ../frontend
```
2. Install dependencies

```bash
npm install
```
3. Start the development server

```bash

npm run dev
```
The React frontend will run at http://localhost:5173

🧪 Usage
Open http://localhost:5173 in your browser.

Fill out the student details form.

Submit to see the predicted placement probability.

Get insights with a clean, responsive interface.


🤝 Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

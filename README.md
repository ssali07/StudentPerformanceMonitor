# 🎓 Campus Placement Prediction App

A web-based application that predicts the probability of a student being placed during campus recruitment. The system is powered by a machine learning model (XGBoost) hosted on a Flask RESTful API backend, with a modern and responsive frontend built using React and TailwindCSS.

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

| Layer       | Technology                            |
|-------------|----------------------------------------|
| **Frontend**| React.js, TailwindCSS                  |
| **Backend** | Python, Flask (RESTful API)            |
| **ML Model**| XGBoost                                |
| **Serialization** | joblib (for model & scaler)     |
| **Libraries** | NumPy, Flask, XGBoost, joblib        |

---

## 📦 Getting Started

Follow these steps to run the application locally:

### 🔁 Backend (Flask API)

1. **Clone the repository**  
```bash
git clone https://github.com/ssali07/StudentPerformanceMonitor.git
cd StudentPerformanceMonitor

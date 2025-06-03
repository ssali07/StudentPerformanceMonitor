import React, { useState } from "react";
import axios from "axios";

const PredictStudent = () => {
  
  
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Department: "",
    Internships: "",
    CGPA: "",
    Hostel: "",
    HistoryOfBacklogs: "",
  });
  

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const payload = {
        Age: Number(formData.Age),
        Male: formData.Gender === "Male" ? 1 : 0,
        Female: formData.Gender === "Female" ? 1 : 0,
        "Electronics And Communication": formData.Department === "Electronics And Communication" ? 1 : 0,
        "Computer Science": formData.Department === "Computer Science" ? 1 : 0,
        "Information Technology": formData.Department === "Information Technology" ? 1 : 0,
        Mechanical: formData.Department === "Mechanical" ? 1 : 0,
        Electrical: formData.Department === "Electrical" ? 1 : 0,
        Civil: formData.Department === "Civil" ? 1 : 0,
        Internships: formData.Internships,
        CGPA: parseFloat(formData.CGPA),
        Hostel: formData.Hostel,
        HistoryOfBacklogs: formData.HistoryOfBacklogs,
      };

      const token = localStorage.getItem("token"); // JWT token from login
      const res = await axios.post("http://localhost:5000/predict", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 rounded-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Student Performance Prediction
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Age</label>
              <input
                name="Age"
                type="number"
                placeholder="Enter your age"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <select
                name="Gender"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Department</label>
              <select
                name="Department"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Department</option>
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Electronics And Communication</option>
                <option>Mechanical</option>
                <option>Electrical</option>
                <option>Civil</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Internships</label>
              <select
                name="Internships"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Have you done internships?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">CGPA</label>
              <input
                name="CGPA"
                type="number"
                step="0.01"
                placeholder="Enter your CGPA (e.g., 8.5)"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Hostel Resident</label>
              <select
                name="Hostel"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Do you live in hostel?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">History of Backlogs</label>
              <select
                name="HistoryOfBacklogs"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Any history of backlogs?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          >
            Predict
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-green-700">
              Prediction: {result.prediction === 1 ? "Likely to Get Placed" : "Not Likely to Get Placed"}
            </h2>
            <p className="text-gray-800">Probability: {result.probability_percent}%</p>
          </div>
        )}

        {error && <p className="text-red-600 mt-4 text-center">{error} If you are not logged in, please do so...</p>}
      </div>
    </div>
  );
};

export default PredictStudent;

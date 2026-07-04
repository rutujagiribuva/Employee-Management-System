import axios from "axios";
import { useState } from "react";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT CLICKED");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees",
        {
          name,
          email,
          department,
          salary,
        }
      );

      console.log(response.data);

      alert("Employee Added Successfully");

      setName("");
      setEmail("");
      setDepartment("");
      setSalary("");
    } catch (error) {
      console.log(" FULLERROR:", error);
      console.log("RESPONSE:", error.response?.data);

      alert("Error Adding Employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Add Employee
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
            required
          />

          <input
            type="email"
            placeholder="Employee Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
            required
          />

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            required
          />

          <button
            type="submit"
            className="bg-green-500 text-white w-full p-2 rounded hover:bg-green-600"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/employees/${id}`
      );

      setName(res.data.name);
      setEmail(res.data.email);
      setDepartment(res.data.department);
      setSalary(res.data.salary);
    } catch (error) {
      console.log(error);
      alert("Error Loading Employee");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/employees/${id}`,
        {
          name,
          email,
          department,
          salary,
        }
      );

      alert("Employee Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Edit Employee
        </h1>

        <form onSubmit={handleUpdate}>
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
            className="bg-yellow-500 text-white w-full p-2 rounded hover:bg-yellow-600"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UsersIcon,
  ComputerDesktopIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import Sidebar from "../components/Sidebar";
import DashboardChart from "../components/DashboardChart";


function Dashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

const employeesPerPage = 5;

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/employees"
      );

      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/employees/${id}`
      );

      fetchEmployees();

      alert("Employee Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase())
    );
  });
  const indexOfLastEmployee = currentPage * employeesPerPage;
const indexOfFirstEmployee =
  indexOfLastEmployee - employeesPerPage;

const currentEmployees = filteredEmployees.slice(
  indexOfFirstEmployee,
  indexOfLastEmployee
);

const totalPages = Math.ceil(
  filteredEmployees.length / employeesPerPage
);
  const totalEmployees = employees.length;

const itEmployees = employees.filter(
  (emp) => emp.department === "IT"
).length;

const techEmployees = employees.filter(
  (emp) => emp.department === "Tech"
).length;

const hrEmployees = employees.filter(
  (emp) => emp.department === "HR"
).length;

  return (
    <div className="bg-gray-100 min-h-screen">
  <Sidebar />
 
  <div className="ml-64 p-6">
        {/* Add Employee */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-5 hover:bg-green-600"
          onClick={() => navigate("/add-employee")}
        >
          Add Employee
        </button>
        <div className="bg-white p-5 rounded-xl shadow mb-5 flex justify-between items-center">
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      Dashboard
    </h1>

    <p className="text-gray-500">
      Welcome to Employee Management System
    </p>
  </div>

  <div className="text-right">
    <p className="font-semibold">Admin</p>
    <p className="text-gray-500">
      {new Date().toLocaleDateString()}
    </p>
  </div>
</div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by Name or Department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full mb-5"
        />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">

  <div className="bg-blue-600 text-white p-5 rounded-xl shadow-lg flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">Total Employees</h2>
      <p className="text-3xl font-bold mt-2">{totalEmployees}</p>
    </div>
    <UsersIcon className="w-12 h-12" />
  </div>

  <div className="bg-green-600 text-white p-5 rounded-xl shadow-lg flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">IT Department</h2>
      <p className="text-3xl font-bold mt-2">{itEmployees}</p>
    </div>
    <ComputerDesktopIcon className="w-12 h-12" />
  </div>

  <div className="bg-yellow-500 text-white p-5 rounded-xl shadow-lg flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">Tech Department</h2>
      <p className="text-3xl font-bold mt-2">{techEmployees}</p>
    </div>
    <BriefcaseIcon className="w-12 h-12" />
  </div>

  <div className="bg-red-500 text-white p-5 rounded-xl shadow-lg flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">HR Department</h2>
      <p className="text-3xl font-bold mt-2">{hrEmployees}</p>
    </div>
    <BuildingOffice2Icon className="w-12 h-12" />
  </div>
</div>

<DashboardChart employees={employees} />

        {/* Employee Table */}
       <div className="bg-white p-5 rounded shadow overflow-x-auto">
  <table className="w-full border border-gray-300">
    <thead className="bg-gray-800 text-white">
  <tr>
    <th className="p-3">#</th>
    <th className="p-3">Employee</th>
    <th className="p-3">Email</th>
    <th className="p-3">Department</th>
    <th className="p-3">Salary</th>
    <th className="p-3 text-center">Actions</th>
  </tr>
</thead>

    <tbody>
      {currentEmployees.map((emp, index) => (
        <tr key={emp._id} className="hover:bg-gray-100">
          <td className="border p-2 text-center">
            {indexOfFirstEmployee + index + 1}
          </td>

          <td className="border p-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {emp.name.charAt(0).toUpperCase()}
              </div>

              <span>{emp.name}</span>
            </div>
          </td>

          <td className="border p-2">
            {emp.email}
          </td>

          <td className="border p-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {emp.department}
            </span>
          </td>

          <td className="border p-2">
            ₹ {emp.salary}
          </td>

          <td className="border p-2">
            <button
              onClick={() =>
                navigate(`/edit-employee/${emp._id}`)
              }
              className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600"
            >
              Edit
            </button>

            <button
              onClick={() =>
                handleDelete(emp._id)
              }
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}

      {filteredEmployees.length === 0 && (
        <tr>
          <td
            colSpan="6"
            className="text-center p-5"
          >
            No Employees Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
  <div className="flex justify-center items-center gap-3 mt-5">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
  >
    Previous
  </button>

  <span>
    Page {currentPage} of {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
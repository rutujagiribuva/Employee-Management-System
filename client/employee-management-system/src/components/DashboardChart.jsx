import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function DashboardChart({ employees }) {
  const departmentData = [
    {
      name: "IT",
      value: employees.filter(
        (emp) => emp.department === "IT"
      ).length,
    },
    {
      name: "Tech",
      value: employees.filter(
        (emp) => emp.department === "Tech"
      ).length,
    },
    {
      name: "HR",
      value: employees.filter(
        (emp) => emp.department === "HR"
      ).length,
    },
  ];

  const COLORS = ["#2563eb", "#16a34a", "#dc2626"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-4">
          Department Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-4">
          Employee Salary
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={employees}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="salary"
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardChart;
import React from "react";

function EmployeeTable() {
  return (
    <table>
      <thead>
      <tr className="bg-gray-200">
         <th className="border p-2">#</th>
  <th className="border p-2">Name</th>
  <th className="border p-2">Email</th>
  <th className="border p-2">Department</th>
  <th className="border p-2">Salary</th>
  <th className="border p-2">Actions</th>
</tr>
      </thead>
    </table>
  );
}

export default EmployeeTable;
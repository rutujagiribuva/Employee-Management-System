import {
  HomeIcon,
  UserPlusIcon,
  UsersIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 shadow-lg">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          EMS Admin
        </h1>
      </div>

      <div className="p-4 space-y-3">

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-700"
        >
          <HomeIcon className="w-6 h-6" />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/add-employee")}
          className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-700"
        >
          <UserPlusIcon className="w-6 h-6" />
          Add Employee
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-700"
        >
          <UsersIcon className="w-6 h-6" />
          Employees
        </button>
<div className="border-t border-slate-700 my-4"></div>
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full p-3 rounded bg-red-500 hover:bg-red-600 mt-10"
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;
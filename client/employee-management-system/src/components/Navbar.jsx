import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Navbar({ search, setSearch }) {
  return (
    <div className="bg-white shadow p-5 flex justify-between items-center rounded-xl mb-6">
      <h1 className="text-3xl font-bold text-gray-700">
        Dashboard
      </h1>

      <div className="flex items-center gap-5">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="pl-10 pr-4 py-2 border rounded-lg w-72"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
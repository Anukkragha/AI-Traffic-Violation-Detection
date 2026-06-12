import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/upload-violation">
          <button className="w-full bg-blue-600 text-white p-4 rounded-lg shadow">
            Upload Violation
          </button>
        </Link>

        <Link to="/violations">
          <button className="w-full bg-red-600 text-white p-4 rounded-lg shadow">
            View Violations
          </button>
        </Link>

        <Link to="/fines">
          <button className="w-full bg-green-600 text-white p-4 rounded-lg shadow">
            View Fines
          </button>
        </Link>

        <Link to="/disputes">
          <button className="w-full bg-purple-600 text-white p-4 rounded-lg shadow">
            View Disputes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
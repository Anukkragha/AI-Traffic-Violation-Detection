import { Link } from "react-router-dom";

function CitizenDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-8">
        Citizen Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/violations">
          <button className="w-full bg-red-600 text-white p-4 rounded-lg shadow">
            View Violations
          </button>
        </Link>

        <Link to="/fines">
          <button className="w-full bg-yellow-500 text-white p-4 rounded-lg shadow">
            View Fines
          </button>
        </Link>

        <Link to="/pay-fine">
          <button className="w-full bg-green-600 text-white p-4 rounded-lg shadow">
            Pay Fine
          </button>
        </Link>

        <Link to="/raise-dispute">
          <button className="w-full bg-purple-600 text-white p-4 rounded-lg shadow">
            Raise Dispute
          </button>
        </Link>

        <Link to="/history">
          <button className="w-full bg-blue-600 text-white p-4 rounded-lg shadow">
            History
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CitizenDashboard;
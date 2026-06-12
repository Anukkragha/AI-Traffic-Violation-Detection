import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 className="text-4xl font-bold mb-10">
        AI Traffic Violation Detection System
      </h1>

      <div className="space-x-5">
        <Link to="/admin-login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Admin Portal
          </button>
        </Link>

        <Link to="/citizen-login">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
            Citizen Portal
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
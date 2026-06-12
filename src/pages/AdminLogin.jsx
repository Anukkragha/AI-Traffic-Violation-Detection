import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-5">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={() => navigate("/admin-dashboard")}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
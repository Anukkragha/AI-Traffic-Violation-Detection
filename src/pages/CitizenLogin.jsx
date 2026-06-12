import { useNavigate } from "react-router-dom";

function CitizenLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-5">
          Citizen Login
        </h2>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={() => navigate("/citizen-dashboard")}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default CitizenLogin;
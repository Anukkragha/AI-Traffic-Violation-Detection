function RaiseDispute() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-6">
          Raise Dispute
        </h2>

        <textarea
          rows="6"
          placeholder="Enter dispute details..."
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-purple-600 text-white p-3 rounded-lg">
          Submit Dispute
        </button>
      </div>
    </div>
  );
}

export default RaiseDispute;
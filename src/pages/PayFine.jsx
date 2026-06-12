function PayFine() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[450px]">
        <h2 className="text-2xl font-bold mb-6">
          Pay Fine
        </h2>

        <input
          type="text"
          placeholder="Fine ID"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PayFine;
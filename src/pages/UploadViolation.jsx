function UploadViolation() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Upload Violation Image
        </h2>

        <input
          type="file"
          accept="image/*"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default UploadViolation;
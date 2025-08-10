import { useContext } from "react";
import { AppContext } from "../context/Context";

export function TryNow() {
  const { removebg } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-7 text-center">
        Remove Image Background
      </h2>
      <p className="text-gray-500 mb-8 text-center">
        Get a transparent background for any image.
      </p>

      <div className="bg-white border-2 border-indigo-200 rounded-2xl shadow-2xl p-8 sm:p-12 flex flex-col items-center space-y-5 w-full max-w-md transition-all duration-300 hover:shadow-indigo-300">
        <input
          type="file"
          id="upload2"
          hidden
          accept="image/*"
          onChange={(e) => removebg(e.target.files[0])}
        />
        <label
          htmlFor="upload2"
          className="bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg cursor-pointer text-center"
        >
          Upload Image
        </label>
        <p className="text-gray-500 text-sm text-center">
          or drop a file, paste image or{" "}
          <a href="#" className="text-blue-500 underline">
            URL
          </a>
        </p>
      </div>
    </div>
  );
}

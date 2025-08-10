import { useState } from "react";
import { assets, categories } from "../assets/assests";

export default function Bgslider() {
  const [sliderpos, setsliderpos] = useState(50);
  const [activecat, setcat] = useState("People");

  const handleSliderChange = (e) => {
    setsliderpos(e.target.value);
  };

  return (
    <div className="mb-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Stunning quality
      </h2>

      <div className="flex justify-center mb-10 flex-wrap">
        <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
          {categories.map((c) => (
            <button
              onClick={() => setcat(c)}
              key={c}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activecat === c
                  ? "bg-white text-gray-800 shadow-md"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg ">
        <img
          src={assets.people_org}
          alt="original image"
          style={{ clipPath: `inset(0 ${100.2 - sliderpos}% 0 0)` }}
        />
        <img
          src={assets.people}
          alt="background removed photo"
          style={{ clipPath: `inset(0 0 0 ${sliderpos}%)` }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          min="0"
          max="100"
          value={sliderpos}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}

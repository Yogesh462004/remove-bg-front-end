import { useContext } from "react";
import { assets } from "../assets/assests";
import { AppContext } from "../context/Context";

export const Header = () => {
  const {removebg}=useContext(AppContext)
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
      style={{ marginTop: "50px" }}
    >
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
          <video
            src={assets.video}
            autoPlay
            loop
            muted
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>
      <div className="order-1 md:2 p-4">
        <h6 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          The Fastest <span className="text-indigo-700">background eraser</span>
        </h6>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed ">
          Transform your photos with background remover app! Highlight your
          subject and creates a transparent background, so you can place it in a
          variety of new designs and destinations . Try it now and immerse your
          subject in a completely different environments!
        </p>
        <div>
          <input type="file" accept="image/*" id="upload1" hidden onChange={(e)=>
    removebg(e.target.files[0])
          }/>
          <label
            htmlFor="upload1"
            className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hoverscale-105 text-lg"
          >
            Upload your image
          </label>
        </div>
      </div>
    </div>
  );
};

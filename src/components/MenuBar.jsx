import { useEffect, useState,useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
  useAuth, 
} from "@clerk/clerk-react";
import { assets } from "../assets/assests";
import { AppContext } from "../context/Context";



const MenuBar = () => {
  const navigate=useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { openSignIn, openSignUp } = useClerk();
  const { user } = useUser();
  const {credits}=useContext(AppContext);

  const openRegister = () => openSignUp({});
  const openLogin = () => openSignIn({});
  

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth >= 768) {
        setMenuOpen(false);
      }
      if (
        (windowWidth >= 768 && newWidth < 768) ||
        (windowWidth < 768 && newWidth >= 768)
      ) {
        setWindowWidth(newWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center relative">
      <Link className="flex items-center space-x-2" to="/">
        <img
          src="./logo.png"
          alt="logo"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
          remove.<span className="text-gray-400">bg</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <SignedOut>
          <button
            onClick={openLogin}
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Login
          </button>
          <button
            onClick={openRegister}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all"
          >
            Sign Up
          </button>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={()=>navigate("/pricing")} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
              <img src={assets.credits} alt="credits" className="w-5 h-5" />
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                Credits: {credits}
              </p>
            </button>

            <p className="text-dark-900 max-sm:hidden">Hi, {user?.firstName}</p>
          </div>
          <UserButton key={windowWidth} />
        </SignedIn>
      </div>

      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4 z-50">
          <SignedOut>
            <button
              onClick={openLogin}
              className="text-gray-700 hover:text-blue-500 font-medium"
            >
              Login
            </button>
            <button
              onClick={openRegister}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all"
            >
              Sign Up
            </button>
          </SignedOut>

          <SignedIn>
             <div className="flex flex-col items-center gap-2 text-center">
              <button onClick={()=>navigate("/pricing")} className="flex items-center gap-2 bg-blue-100 px-3 py-1.5 rounded-full">
                <img src={assets.credits} alt="credits" className="w-5 h-5" />
                <p className="text-sm font-medium text-gray-700">Credits: {credits}</p>
              </button>
              <h2>
                <p className="text-lg text-gray-900">Hi, {user?.firstName}</p>
              </h2>{" "}
              <UserButton key={windowWidth + "-mobile"} />
            </div> 
            

          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default MenuBar;

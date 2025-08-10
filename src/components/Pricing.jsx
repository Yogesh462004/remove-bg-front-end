import { useAuth, useClerk } from "@clerk/clerk-react";
import { plans } from "../assets/assests";
import { PlaceOrder } from "../service/OrderService";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const Pricing = () => {
  const { isSignedIn, getToken } = useAuth();
  const { openSignIn } = useClerk();
  const { loadUserCredits, backendurl } = useContext(AppContext);

  const handleOrder = (planId) => {
    if (!isSignedIn) {
      return openSignIn();
    }

    PlaceOrder({
  planId,
  getToken,
  onSuccess: () => {
    loadUserCredits();
  },
  backendurl
});

  };

  return (
    <div>
      <div className="py-10 md:px-20 lg:px-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose your perfect package
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Select from our carefully curated photo packages designed to meet
              your specific needs and budget.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`relative pt-6 p-6 ${
                  p.popular
                    ? "backdrop-blur-lg rounded-2xl"
                    : "border border-gray-800 rounded-xl"
                } bg-[#1A1A1A] hover:-translate-y-2 transition-all duration-300`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl text-violet-400 font-bold">
                      ₹{p.price}
                    </span>
                  </div>
                  <div className="px-4 pb-8">
                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center text-white">
                        {p.credits}
                      </li>
                      <li className="flex items-center text-white">
                        {p.description}
                      </li>
                    </ul>
                    <button
                      className="w-full py-3 px-6 text-center text-white font-semibold rounded-full
                        bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600
                        transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                      onClick={() => handleOrder(p.id)}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

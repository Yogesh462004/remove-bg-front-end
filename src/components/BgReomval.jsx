import { steps } from "../assets/assests";

export const BgReomval = () => {
  return (
    <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        How to remove background in seconds?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
          >
            <span className="text-indigo-700 text-sm font-semibold mb-4">
              {item.step}
            </span>

            {/* Circle background for content */}
            <div className="bg-gray-100 w-full min-h-[250px] flex flex-col items-center justify-center px-4 py-6 rounded-3xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import { testimonials } from "../assets/assests";

export function Testimonial() {
  return (
    <div>
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          They Love us.You will too.
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((te) => (
            <div
              className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl shadow hover:shadow-lg transition-shadow"
              key={te.id}
            >
              <div className="flex flex-col pt-8 px-6 mb-10 space-y-5">
                <svg
                  width="24"
                  height={18}
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/200/svg"
                  className="text-gray-A400 dark:text-gray-600 fill-current"
                >
                  <path
                    d="M24 7.3h5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                    fill="current"
                  ></path>
                </svg>
                <p className="text-gray-700 m-0" style={{hypens:"auto"}}>
                  {te.quote}
                </p>
              </div>
              <div className="flex space-2 bg-gray-50 px-6 pt-6 pb-5 rounded-b-xl">
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-gray-900 m-0">
                        {te.author}
                    </p>
                    <p className="text-gray-500 text-sm m-0 mt-1">
                        {te.handle}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

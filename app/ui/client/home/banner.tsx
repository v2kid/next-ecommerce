import ImageCarousel from "./carousel";

export default function Banner(){
    const images = [
        "https://i.pinimg.com/564x/ac/df/d2/acdfd2236192cf8a7fa52ac854c326df.jpg",
        "https://i.pinimg.com/564x/e4/5b/f0/e45bf0058c071ebd603dcf827ba4033c.jpg",
        "https://i.pinimg.com/564x/4c/3c/e9/4c3ce97546bac6af6ea412584d609e8f.jpg",
      ];
    return(
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className=" bg-gray flex ">
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Build Your New <span className="text-indigo-600">Idea</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates. Cumque debitis dignissimos id quam vel!
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 ">
            <div className="h-300 object-cover">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    )
}
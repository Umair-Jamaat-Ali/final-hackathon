import "./blogCard.css";

export default function BlogCard() {
  return (
    <>
      {/* <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="max-w-[1200px] blogCard hover:text-white h-full border-2 border-blue-300 border-opacity-60 rounded-lg overflow-hidden">
            <div class="p-6">
              <h2 class="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                Maecenas laoree efficiture sagittis aliquam eleifend nisl
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                Posted 7 March, 2020
              </h1>
              <p class="leading-relaxed mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                ducimus porro voluptates mollitia cumque! Veritatis fuga ut
                assumenda, nesciunt saepe cumque pariatur iusto fugiat tenetur
                animi facere porro maxime nostrum.
              </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="blogCard max-w-[350px]">
        <h2 class="mb-3 text-xl font-bold">
          Maecenas laoree efficiture sagittis aliquam eleifend nisl
        </h2>
        <span className="pt-5 text-lg font-semibold text-blue-500"> Posted 7 March, 2020</span>
        <p class="my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ducimus
          porro voluptates mollitia cumque! Veritatis fuga ut assumenda,
          nesciunt saepe cumque pariatur iusto fugiat tenetur animi facere porro
          maxime nostrum.
        </p>
        <button>Learn More</button>
      </div>
    </>
  );
}

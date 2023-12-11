import BlogCard from "../(components)/blogCard/blogCard";
import VerifyPage from "../(components)/verifyPage/verifyPage";

export default function Blog() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center py-32">
        <div className="lg:w-1/4 sm:w-96 md:w-1/2 w-full px-4">
          <VerifyPage verifyPage={"Our Blog"} />
          <h2 className="font-bold text-3xl text-gray-900 tracking-widest mb-3">
            Latest News & Blog
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label for="footer-field" className="leading-7 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate odit quas magni tenetur deserunt dolorem!
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}

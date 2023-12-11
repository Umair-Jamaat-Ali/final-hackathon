import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer class="text-gray-600 bg-slate-300 body-font ">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <image src="/img/Smartmockups_Logo_Symbol.png" alt="some thing" width={"80px"} />
              <span class="ml-3 text-xl">MediFex</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio temporibus similique modi quidem animi dolores facere
              consequuntur qui. Doloribus.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Our Links
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicess"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Blog
                  </Link>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Our Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    About Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Our Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicess"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pagess"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Get A Free Quot
                  </Link>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3">
                Our Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Cardiology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Neuro Surgeon
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicess"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Plastic Surgery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pagess"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Pancreatic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    class="text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Surgery
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

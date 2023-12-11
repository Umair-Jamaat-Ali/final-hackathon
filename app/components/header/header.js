import Image from "next/image";
import Button from "../button/button";
import Navbar from "../navbar/navbar";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="headerBg">
        <Navbar />
        <section class="body-font lg:mx-20 text-white py-8">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font text-5xl mb-4 font-medium">
                CREATIVE <br /> DIGITAL AGENCY
                <br class="hidden lg:inline-block" />
              </h1>
              <p class="mb-8 leading-relaxed max-w-2xl">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>

              <Button btnText="Learn More" />
            </div>

            {/* <Image
              src="/assets/download.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            /> */}
          </div>
        </section>
      </div>
    </>
  );
}

import Image from 'next/image'
import Button from "../components/button/button";
import CoursesCard from "../components/coursesCard/coursesCard";
import VerifyPage from "../components/verifyPage/VerifyPage";

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-24 pt-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src="/assets/123.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <VerifyPage verifyPage={"About Us"} />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We Are here for easy medication
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quas autem hic aperiam molestiae voluptatem error
              ullam sint, quibusdam recusandae sed! Tenetur voluptatibus
              nostrum, ad inventore eveniet aliquam repudiandae expedita.
            </p>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage.
            </p>
            <div className="flex justify-center">
              <Button btnText="Read More" />
            </div>
          </div>
        </div>
      </section>

 

    </>
  );
}

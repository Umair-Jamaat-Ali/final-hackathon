import TeamCard from "./(components)/taemCard/teamCard";

import img1 from "../../public/assets/lady 2.jpg";
import img2 from "../../public/assets/lady d.jpg";
import img3 from "../../public/assets/d.jpg";


export default function Team() {
  return (
    <>
      <div className="py-14 bg-blue-100">
        <div className="max-w-[1010px] m-auto mb-10">
          <span className="flex justify-center text-lg text-blue-600">
            Our Team
          </span>
          <h1 className="flex justify-center text-4xl font-bold">
            Our Top Dedicated Professionals
          </h1>
        </div>

        <div className="flex justify-center flex-wrap">
          <div className="mx-9">
            <TeamCard
              src={img1}
              heading={"Dulgas Walker"}
              skill={"Petriatics"}
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={img2}
              heading={"Caroline Harrison"}
              skill={"Cardiologist"}
            />
          </div>

          <div className="mx-9">
            <TeamCard
              src={img3}
              heading={"Safia Simpson"}
              skill={"Surgeon"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

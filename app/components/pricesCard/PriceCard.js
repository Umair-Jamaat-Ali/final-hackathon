import Image from 'next/image'
import Button from "../button/button";
import "./priceCard.css";

export default function PriceCard(props) {
  return (
    <>
      <div className="priceCard">
        <h3 className="text-bold text-xl">{props.heading}</h3>
        <Image src={props.src} alt="some thing" className="w-24" />

        <h3>
          <span className="text-xl font-bold text-blue-800">{props.coursePrice}</span>/month
        </h3>

        <p className="mb-6 mt-3">
          Medical Facility <br />
          Pharmacy <br />
          Online Consultation <br />
          Physical Consultation <br />
        </p>
        <Button btnText={"Start Now"} />
      </div>
    </>
  );
}

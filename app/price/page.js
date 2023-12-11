import ClientPriceCard from '../components/clientPriceCard/ClientPriceCard';
import PriceCard from '../components/pricesCard/PriceCard';
import VerifyPage from '../components/verifyPage/VerifyPage';
import "./price.css";

// Uncomment these lines if you plan to use the images
// import img1 from '../../public/img/planStandard.png'
// import img2 from '../../public/img/STANDARD-ICON.png'
// import img3 from '../../public/img/download (1).jpeg'
// import cardImg1 from '../../public/img/it specialist.png'
// import cardImg2 from '../../public/img/circle-cropped-8-1-1024x1024.png'

export default function Price() {
  return (
    <>
      <div className="my-16">
        <div className="max-w-[945px] m-auto mb-8 flex justify-between items-center flex-wrap">
          <div>
            <VerifyPage verifyPage={"Our Pricing"} />
            <h1 className="text-3xl font-bold">
              CHOSE A PLAN THAT&apos;S RIGHT FOR YOU
            </h1>
          </div>

          <div className="toggleSwitch">
            <p>Physical Consultation</p>
            <label className="switch mx-4">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <p>Video</p>
          </div>
        </div>

        <div className="flex justify-center flex-wrap">
          <PriceCard
            // Uncomment and provide a valid source (src) for the image
            // src={img1}
            heading={"Basic Plan"}
            coursePrice={"$50"}
          />

          <PriceCard
            // Uncomment and provide a valid source (src) for the image
            // src={img2}
            heading={"Standard Plan"}
            coursePrice={"$99"}
          />

          <PriceCard
            // Uncomment and provide a valid source (src) for the image
            // src={img3}
            heading={"Premium Plan"}
            coursePrice={"$150"}
          />
        </div>
      </div>

      <div className="bg-blue-600 py-14">
        <h1 className="text-4xl font-bold flex justify-center pb-5">
          We&apos;re Trusted By Clients
        </h1>

        <div className="flex flex-wrap justify-center">
          <ClientPriceCard
            // Uncomment and provide a valid source (src) for the image
            // src={cardImg1}
            heading={"Mina Whatson"}
            profession={"CONSULTANT"}
          />

          <ClientPriceCard
            // Uncomment and provide a valid source (src) for the image
            // src={cardImg2}
            heading={"Edward Hunter"}
            profession={"IT SPECIALIST"}
          />
        </div>
      </div>
    </>
  );
}

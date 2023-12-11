import Image from 'next/image'
import "./clientPriceCard.css";

export default function ClientPriceCard(props) {
  return (
    <>
      <div className="mx-5 max-w-[500px]">
        <div className="clientPriceCard">
          <Image src={props.src} width={'100'}/>
          <h2 className="font-bold mt-2">{props.heading}</h2>
          <p className="text-md mb-3">{props.profession}</p>
          <p className="text-center max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            consequuntur officia saepe quisquam esse voluptatibus, suscipit
            sequi, est ipsum tempore deleniti repudiandae.
          </p>
        </div>
      </div>
    </>
  );
}
